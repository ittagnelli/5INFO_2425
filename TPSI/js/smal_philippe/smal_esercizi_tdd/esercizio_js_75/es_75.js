class Animale {
    numZampe
    nome
    colore

    constructor(numZampe, nome, colore) {
        this.numZampe = numZampe
        this.nome = nome
        this.colore = colore
    }

    get numZampe() { return this.numZampe }
    get nome() { return this.nome }
    get colore() { return this.colore }

    enumera() {
        console.log("Num zampe : " + this.numZampe + " Nome : " + this.nome + " Colore : " + this.colore )
    }
}

class Automobile {
    numRuote
    modello
    colore

    constructor(numRuote, modello, colore) {
        this.numRuote = numRuote
        this.modello = modello
        this.colore = colore
    }

    get numRuote() { return this.numRuote }
    get modello() { return this.modello }
    get colore() { return this.colore }

    enumera() {
        console.log("Num ruote : " + this.numRuote + " Modello : " + this.modello + " Colore : " + this.colore )
    }
}

class Poligono {
    numLati
    nome
    lungLati

    constructor(numLati, nome, lungLati) {
        this.numLati = numLati
        this.nome = nome
        this.lungLati = lungLati
    }

    get numLati() { return this.numLati }
    get nome() { return this.nome }
    get lungLati() { return this.lungLati }

    enumera() {
        console.log("Num lati : " + this.numLati + " Nome : " + this.nome + " Lung lati : " + this.lungLati )
    }
}

po = new Poligono(4, "Quadrato", 20)
au = new Automobile(4, "Fiat", "Verde Acqua")
pn = new Animale(4, "Gorilla", "Nero")

po.enumera(); au.enumera(); pn.enumera() 
