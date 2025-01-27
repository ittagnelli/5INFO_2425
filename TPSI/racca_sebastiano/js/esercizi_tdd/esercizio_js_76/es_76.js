export class Orario {
  #h = 0;
  #m = 0;
  #s = 0;
  constructor(h, m, s) {
    this.#h = h;
    this.#m = m;
    this.#s = s;
  }

  mill() {
    return this.#s * 1000 + this.#m * 60 * 1000 + this.#h * 60 * 60 * 1000;
  }

  diff(time) {
    let diff = Math.abs(this.mill() - time.mill());

    return {
      milliseconds: diff,
      seconds: diff / 1000,
      minutes: diff / (1000 * 60),
      hours: diff / (1000 * 60 * 60),
    };
  }
}
