import { Studente, Docente, confrontaOBJ  } from "./es_72.js";


let studente1 = new Studente("Mario", 4);
let studente2 = new Studente("Mario", 4);
let docente2 = new Docente("Pino", 5);

describe("ESERCIZIO 72", () => {
    test('Oggetti uguali', () => {
        expect(confrontaOBJ(studente1, studente2)).toBe(true);
    });

    test('Oggetti diversi', () => {
        expect(confrontaOBJ(studente2, docente2)).toBe(false);
    });
});