class Studente {
    nome;
    classe;

    constructor(n, c) {
        this.nome = n;
        this.classe = c;
    }
}

class Docente {
    nome;
    classe;

    constructor(n, c) {
        this.nome = n;
        this.classe = c;
    }
}

let mario = new Studente("mario", 4);
let mariolino = new Studente("mario", 4);
let marco = new Docente("marco", 4);

if (mario instanceof Studente && mariolino instanceof Studente) {
    console.log(JSON.stringify(mario) == JSON.stringify(mariolino));
}