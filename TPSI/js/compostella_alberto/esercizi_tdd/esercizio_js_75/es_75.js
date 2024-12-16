class Animale{
    numZampe
    nome 
    colore

    constructor(numZampe, nome, colore){
        this.numZampe = numZampe
        this.nome = nome
        this.colore = colore 
    }

    get numZampe() {return this.numZampe}
    get nome() {return this.nome}
    get colore() {return this.colore}
    Enumera(){
        console.log("Num zampe: "+ numZampe + "Nome: "+ nome + "colore: "+colore )
    }
}

class Automobile{
    numRuote
    modello
    colore 

    constructor(numRuote, modello, colore){
        this.numRuote = numRuote
        this.modello = modello
        this.colore = colore
    }

    get numRuote() {return this.numRuote}
    get modello() {return this.modello}
    get colore() {return this.colore}
    Enumera(){
        console.log("numRoute: "+ numRuote + "modello: "+ modello + "colore: " + colore)
    }
}

class Poligono {
    numLati
    nome
    lungLati

    constructor(numLati,nome,lungLati){
        this.numLati = numLati
        this.nome = nome
        this.lungLati = lungLati
    }

    get numLati() {return this.numLati}
    get nome() {return this.nome}
    get lungLati() {return this.lungLati}

    Enumera(){
        console.log("numLati: " + numLati + "nome: " + nome + "lungLati"+ this.lungLati)

    }
}

a1 = new Animale(4, "Mucca", "bianco")
w1 = new Automobile(4, "Fiat", "nera")
triangolo = new Poligono(3, "gianni", "30cm")