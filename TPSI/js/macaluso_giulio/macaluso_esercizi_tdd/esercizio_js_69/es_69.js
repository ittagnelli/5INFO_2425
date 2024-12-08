class Quadrato {
    constructor(l) {
        this.lato = l;
    }

    set lato (n) {
        this._lato = n;
    }

    get lato() {
        return this._lato;
    }

    get area() {
        return this._lato * this._lato;
    }

    get perimetro() {
        return this._lato * 4;
    }
}

let quadrato = new Quadrato(process.argv[2]);
console.log(quadrato.area);
console.log(quadrato.perimetro);