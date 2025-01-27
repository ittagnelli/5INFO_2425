class Docente {
    nome
    classe

    constructor(nome, classe) {
        this.classe = classe
        this.nome = nome
    }
}

class Studente {
    nome
    classe

    constructor(nome, classe) {
        this.classe = classe
        this.nome = nome
    }
}

function confrontaOBJ(s, d) {
    return (s.nome == d.nome) && (s.classe == s.classe)
}

let studente = new Studente("Mario", 4);
let docente = new Docente("Mario", 4);

console.log(confrontaOBJ(studente, docente))

