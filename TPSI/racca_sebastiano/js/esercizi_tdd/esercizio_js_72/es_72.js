// Testo dell'esercizio:
/**
export class Studente {
  constructor(nome, classe) {
    this.nome = nome;
    this.classe = classe;
  }
}

export class Docente {
  constructor(nome, classe) {
    this.nome = nome;
    this.classe = classe;
  }
}

export const confrontaOBJ = (obj1, obj2) => {};
*/

export class Studente {
  constructor(nome, classe) {
    this.nome = nome;
    this.classe = classe;
  }
}

export class Docente {
  constructor(nome, classe) {
    this.nome = nome;
    this.classe = classe;
  }
}

export const confrontaOBJ = (obj1, obj2) => {
  return (
    ((obj1 instanceof Studente && obj2 instanceof Studente) ||
      (obj1 instanceof Docente && obj2 instanceof Docente)) &&
    JSON.stringify(obj1) === JSON.stringify(obj2)
  );
};
