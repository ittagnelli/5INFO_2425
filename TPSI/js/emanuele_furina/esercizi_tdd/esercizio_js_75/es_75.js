export class Animale {
    constructor(nome, tipo, zampe) {
        this.nome = nome;
        this.tipo = tipo;
        this.zampe = zampe;
    }
}

export class Automobile {
    constructor(marca, modello, cilindrata, potenza) {
        this.marca = marca;
        this.modello = modello;
        this.cilindrata = cilindrata;
        this.potenza = potenza;
    }
}

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

