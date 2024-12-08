class Quadrato {
    constructor(lato) {
        this.lato = lato;
    }

    get lato() {
        return this._lato;
    }

    set lato(value) {
        this._lato = value;
    }

    get perimetro() {
        return this.lato * 4;
    }

    get area() {
        return this.lato ** 2;
    }
}

const main = () => {
    const q = new Quadrato(2);
    console.log("Perimetro: ",q.perimetro);
    console.log("Area: ",q.area);
}

main();