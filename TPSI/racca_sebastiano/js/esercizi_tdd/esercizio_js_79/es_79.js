export class Automobile {
  #persone = 0;
  #marcia = 1;
  #velocita = 0;
  #accesa = false;

  set persone(value) {
    if (value < 0 || value > 5)
      throw new Error("Numero di persone inserito non valido");
    if (this.velocita > 0)
      throw new Error("Macchina in movimento, operazione non permessa");
    this.#persone = value;
  }

  get persone() {
    return this.#persone;
  }

  set accesa(value) {
    this.#accesa = value;
  }

  get accesa() {
    return this.#accesa;
  }

  onoff() {
    this.accesa = !this.accesa;
  }

  set velocita(value) {
    if (value < this.velocita - 30 || value > this.velocita + 30)
      throw new Error(
        "La velocità impostata supera i 30km/h rispetto alla precedente"
      );
    if (value < 0 || value > 180)
      throw new Error("La velocità non rispetta i limiti");

    if (!this.accesa)
      throw new Error("Macchina spenta, operazione non permessa");

    this.#velocita = value;
  }

  get velocita() {
    return this.#velocita;
  }

  get marcia() {
    return this.#marcia;
  }

  aggiungi_marcia() {
    if (!this.accesa)
      throw new Error("Macchina spenta, operazione non permessa");

    if (this.marcia == 6) throw new Error("Non c'è una marcia superiore");

    this.#marcia++;
  }

  togli_marcia() {
    if (!this.accesa)
      throw new Error("Macchina spenta, operazione non permessa");

    if (this.marcia == 1) throw new Error("Non c'è una marcia inferiore");

    this.#marcia--;
  }
}
