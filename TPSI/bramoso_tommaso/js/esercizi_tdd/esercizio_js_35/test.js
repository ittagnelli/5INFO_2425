import { tronca } from "./bramoso_esercizio_js_35.js";
import fs from "fs";

describe("ESERCIZIO 35", () => {
    test('TEST 01', () => {
        expect(tronca("Facciamo tanti esercizi che ci fanno bene", 10)).toBe("Facciamo t...");
    });

    test('TEST 02', () => {
        expect(tronca("C'era una volta tanto tempo fa", 15)).toBe("C'era una volta...");
    });

    test('TEST 03', () => {
        expect(tronca("Ciro Esposito", 0)).toBe("...");
    });
});