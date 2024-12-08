export class Poligono {
    constructor(lunghezza_lati = 0, num_lati = 0) {
        this.lunghezza_lati = lunghezza_lati;
        this.num_lati = num_lati;
    }

    area() {
        return "Area non definita per un poligono generico.";
    }

    perimetro() {
        return this.num_lati * this.lunghezza_lati;
    }

    fill_lati(valore) {
        this.lunghezza_lati = valore;
        return this;
    }
    

    stampa() {
        console.log("Area : " + this.area() + "\nPerimetro : " + this.perimetro());
    }
}

export class Quadrato extends Poligono {
    constructor(lunghezza_lati = 0) {
        super(lunghezza_lati, 4);
    }

    area() {
        return this.lunghezza_lati ** 2;
    }
}

export class TriangoloEquilatero extends Poligono {
    constructor(lunghezza_lati = 0) {
        super(lunghezza_lati, 3);
    }

    area() {
        return (Math.sqrt(3) / 4) * this.lunghezza_lati ** 2;
    }
}

export class Pentagono extends Poligono {
    constructor(lunghezza_lati = 0) {
        super(lunghezza_lati, 5);
    }

    area() {
        const coeff = Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) / 4;
        return coeff * this.lunghezza_lati ** 2;
    }
}

export class Esagono extends Poligono {
    constructor(lunghezza_lati = 0) {
        super(lunghezza_lati, 6);
    }

    area() {
        return Math.round((3 * Math.sqrt(3) / 2) * this.lunghezza_lati ** 2);
    }
}

export class Ettagono extends Poligono {
    constructor(lunghezza_lati = 0) {
        super(lunghezza_lati, 7);
    }

    area() {
        const tan = Math.tan(Math.PI / 7);
        return Math.round((7 * this.lunghezza_lati ** 2) / (4 * tan));
    }
}

export class Ottagono extends Poligono {
    constructor(lunghezza_lati = 0) {
        super(lunghezza_lati, 8);
    }

    area() {
        return Math.round(2 * (1 + Math.sqrt(2)) * this.lunghezza_lati ** 2);
    }
}
