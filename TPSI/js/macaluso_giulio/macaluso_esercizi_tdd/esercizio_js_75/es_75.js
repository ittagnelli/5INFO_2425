class Animale {
    nome;
    specie;
    anni;

    constructor(n, s, a) {
        this.nome = n;
        this.specie = s;
        this.anni = a;
    }

    get nome() {
        return this.nome;
    }

    enumera() {
        console.log("nome: " + this.nome + " specie: " + this.specie + " anni: " + this.anni);
    }
}

class Poligono {
    lato;
    numeroLati;
    dimensioni;

    constructor(l, n, d) {
        this.lato = l;
        this.numeroLati = n;
        this.dimensioni = d;
    }

    get lato() {
        return this.lato;
    }

    enumera() {
        console.log("lato: " + this.lato + " numero lati: " + this.numeroLati + " dimensioni: " + this.dimensioni);
    }
}

class Automobile {
    modello;
    targa;
    numeroRuote;

    constructor(m, t, n) {
        this.modello = m;
        this.targa = t;
        this.numeroRuote = n;
    }

    get modello() {
        return this.modello;
    }

    enumera() {
        console.log("modello: " + this.modello + " targa: " + this.targa + " numero ruote: " + this.numeroRuote);
    }
}

let animale1 = new Animale("riccardo", "scimmia", 5);
animale1.enumera();
let animale2 = new Animale("girone", "squalo", 7);
animale2.enumera();
let poligono1 = new Animale(2, 4, 1);
poligono1.enumera();
let poligono2 = new Animale(5, 3, 2);
poligono2.enumera();
let automobile1 = new Animale("ferrari", "asdqwe", 4);
automobile1.enumera();
let automobile2 = new Animale("fiat", "fghrty", 6);
automobile2.enumera();