import { tronca_parola } from "./bramoso_esercizio_js_36.js";
import fs from 'fs';

describe("ESERCIZIO 36", () => {
    test('TEST 01', () => {
        expect(tronca_parola("Facciamo tanti esercizi che ci fanno bene", 3)).toBe("Facciamo tanti esercizi");
    });

    test('TEST 02', () => {
        expect(tronca_parola("C'era una volta tanto tempo fa in una galassia...", -2)).toBe("C'era una volta tanto tempo fa in");
    });

    test('TEST 03', () => {
        expect(tronca_parola("Ciro Esposito", 0)).toBe("");
    });
})