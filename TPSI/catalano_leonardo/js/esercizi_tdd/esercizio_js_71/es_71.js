export class Poligono {
    constructor(numLati, lunghezzaLato) {
        this.numLati = numLati;
        this.lato = lunghezzaLato;
    }


    get perimetro() {
        return this.numLati * this.lato;
    }

    get area() {
        if (this.numLati < 3) return null;
        if (this.numLati > 3) {
            const apotema = this.lato / (2 * Math.tan(Math.PI / this.numLati));
            return (this.perimetro * apotema) / 2;
        }
        return null;
    }
}

export class Quadrato extends Poligono {
    constructor(lato) {
        super(4, lato);
    }


    get area() {
        return this.lato ** 2;
    }
}

export class TriangoloEquilatero extends Poligono {
    constructor(lato) {
        super(3, lato);
    }


    get area() {
        return (this.lato ** 2 * Math.sqrt(3)) / 4;
    }
}


export class Pentagono extends Poligono {
    constructor(lato) {
        super(5, lato);
    }
}

export class Esagono extends Poligono {
    constructor(lato) {
        super(6, lato);
    }
}

export class Ettagono extends Poligono {
    constructor(lato) {
        super(7, lato);
    }
}

export class Ottagono extends Poligono {
    constructor(lato) {
        super(8, lato);
    }
}

