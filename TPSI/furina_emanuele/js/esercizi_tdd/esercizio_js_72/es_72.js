export class Studente {
    constructor(nome, voto) {
        this.nome = nome;
        this.voto = voto;
    }
}

export class Docente {
    constructor(nome, voto) {
        this.nome = nome;
        this.voto = voto;
    }
}

export const confrontaOBJ = (obj1, obj2) => {
    if (obj1 instanceof Studente && obj2 instanceof Docente) {
        return obj1.nome === obj2.nome && obj1.voto === obj2.voto;
    }
    return false;
}