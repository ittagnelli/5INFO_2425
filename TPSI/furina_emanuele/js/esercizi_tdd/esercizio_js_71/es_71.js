export class Poligono {
    constructor() {
        this.lati = [];
    }

    add_lato(lato) {
        this.lati.push(lato);
        return this;
    }

    get_perimetro() {
        return this.lati.reduce((acc, lato) => acc + lato, 0);
    }
}

export class TriangoloEquilatero extends Poligono {
    fill_lati(lato) {
        this.lati = [lato, lato, lato];
        return this;
    }

    area() {
        const lato = this.lati[0];
        return (Math.sqrt(3) / 4) * lato * lato;
    }

    perimetro() {
        return this.get_perimetro();
    }
}

export class Quadrato extends Poligono {
    fill_lati(lato) {
        this.lati = [lato, lato, lato, lato];
        return this;
    }

    area() {
        const lato = this.lati[0];
        return lato * lato;
    }

    perimetro() {
        return this.get_perimetro();
    }
}

export class Pentagono extends Poligono {
    fill_lati(lato) {
        this.lati = Array(5).fill(lato);
        return this;
    }

    area() {
        const lato = this.lati[0];
        const apothem = lato / (2 * Math.tan(Math.PI / 5));
        return (5 * lato * apothem) / 2;
    }

    perimetro() {
        return this.get_perimetro();
    }
}

export class Esagono extends Poligono {
    fill_lati(lato) {
        this.lati = Array(6).fill(lato);
        return this;
    }

    area() {
        const lato = this.lati[0];
        return (3 * Math.sqrt(3) / 2) * lato * lato;
    }

    perimetro() {
        return this.get_perimetro();
    }
}

export class Ettagono extends Poligono {
    fill_lati(lato) {
        this.lati = Array(7).fill(lato);
        return this;
    }

    area() {
        const lato = this.lati[0];
        const apothem = lato / (2 * Math.tan(Math.PI / 7));
        return (7 * lato * apothem) / 2;
    }

    perimetro() {
        return this.get_perimetro();
    }
}

export class Ottagono extends Poligono {
    fill_lati(lato) {
        this.lati = Array(8).fill(lato);
        return this;
    }

    area() {
        const lato = this.lati[0];
        const apothem = lato / (2 * Math.tan(Math.PI / 8));
        return (8 * lato * apothem) / 2;
    }

    perimetro() {
        return this.get_perimetro();
    }
}