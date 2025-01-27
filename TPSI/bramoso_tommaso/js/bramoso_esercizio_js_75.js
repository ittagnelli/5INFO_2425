// Classe Animale
class Animale {
    constructor(nome, tipo, età) {
        this.nome = nome;
        this.tipo = tipo;
        this.età = età;
    }

    parla() {
        console.log(`${this.nome} sta emettendo un suono!`);
    }

    descrivi() {
        console.log(`${this.nome} è un ${this.tipo} di ${this.età} anni.`);
    }

    enumera() {
        console.log(Object.keys(this));
    }
}

class Automobile {
    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
    }

    accendi() {
        console.log(`La ${this.marca} ${this.modello} è stata accesa.`);
    }

    descrivi() {
        console.log(`Questa è una ${this.marca} ${this.modello}, anno ${this.anno}.`);
    }

    enumera() {
        console.log(Object.keys(this));
    }
}

class Poligono {
    constructor(lati, lunghezza, colore) {
        this.lati = lati;
        this.lunghezza = lunghezza;
        this.colore = colore;
    }

    calcolaPerimetro() {
        console.log(`Il perimetro del poligono è ${this.lati * this.lunghezza}.`);
    }

    descrivi() {
        console.log(`Questo è un poligono con ${this.lati} lati, di lunghezza ${this.lunghezza}, di colore ${this.colore}.`);
    }

    enumera() {
        console.log(Object.keys(this));
    }
}

const cane = new Animale("Fido", "Cane", 5);
const gatto = new Animale("Micia", "Gatto", 3);

cane.enumera();
cane.parla();
cane.descrivi();

gatto.enumera();
gatto.parla();
gatto.descrivi();

const fiat = new Automobile("Fiat", "Panda", 2020);
const tesla = new Automobile("Tesla", "Model 3", 2022);

fiat.enumera();
fiat.accendi();
fiat.descrivi();

tesla.enumera();
tesla.accendi();
tesla.descrivi();

const triangolo = new Poligono(3, 5, "rosso");
const quadrato = new Poligono(4, 6, "blu");

triangolo.enumera();
triangolo.calcolaPerimetro();
triangolo.descrivi();

quadrato.enumera();
quadrato.calcolaPerimetro();
quadrato.descrivi();