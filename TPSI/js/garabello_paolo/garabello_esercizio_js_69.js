class Quadrato {
    constructor(l) {
        this.lato = l;
    }

    get lato() { return this._lato; }

    set lato(val) { this._lato = val; }

    get area() { return this._lato ** 2; }

    get perimetro() { return this._lato * 4; }
}

q = new Quadrato(process.argv[2]);
console.log("perimetro: " + q.area + " area: " + q.perimetro);