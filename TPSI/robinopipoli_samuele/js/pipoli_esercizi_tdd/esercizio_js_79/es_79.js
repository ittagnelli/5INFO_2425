class Automobile {
    constructor(persone, velocita, marcia, stato) {
        this._persone = persone;
        this._velocita = velocita;
        this._marcia = marcia;
        this.stato = stato;
    }

    setStato() {
        this.stato = !this.stato;
    }

    get persone() {
        return this._persone;
    }

    set persone(p) {
        if (this.stato) this._persone = p; 
    }

    get velocita() {
        return this._velocita;
    }

    set velocita(v) {
        if (this.stato) {
            if ((((this._velocita - v <= 30) && (this._velocita > v)) || 
            ((v - this._velocita <= 30) && (this._velocita < v))) && 
            ((v >= 0) && (v <= 180))) this._velocita = v;
        }
    }

    get marcia() {
        return this._marcia;
    }

    set marcia(m) {
        if (this.stato) {
            if (((m >= 1) && (m <= 6)) && 
            (((this._marcia - m == 1) && (this._marcia > m)) || 
            ((m - this._marcia == 1) && (this._marcia < m)))) this._marcia = m;
        }
    }
}

let auto = new Automobile(4, 100, 5, true);
console.log(auto);
auto.persone = 2;
console.log(auto);
auto.velocita = 50;
console.log(auto);
auto.setStato();
console.log(auto);
auto.marcia = 4;
console.log(auto);
auto.setStato();
console.log(auto);
auto.marcia = 6;
console.log(auto);
