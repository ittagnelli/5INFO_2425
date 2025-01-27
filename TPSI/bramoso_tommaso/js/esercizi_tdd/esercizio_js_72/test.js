import { Studente, Docente, confrontaOBJ  } from "./es_72.js";


let studente1 = new Studente("Mario", 4);
let docente1 = new Docente("Mario", 4)
let studente2 = new Studente("Giovanni", 2);
let docente2 = new Docente("Pino", 5)


console.log(confrontaOBJ(studente,docente));

describe("ESERCIZIO 72", () => {
    test('Oggetti uguali', () => {
        expect(confrontaOBJ(studente1, docente1)).toBe(true);
    });

    test('Oggetti diversi', () => {
        expect(confrontaOBJ(studente2, docente2)).toBe(false);
    });
});