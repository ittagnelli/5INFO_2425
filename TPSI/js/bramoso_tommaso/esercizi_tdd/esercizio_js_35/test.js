import { tronca } from "./es_35.js";
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

    test('TEST 04', () => {
        expect(tronca(
            fs.readFileSync("esercizio_js_35/input_test04.txt", "utf-8"),
            538
        )).toBe(fs.readFileSync("esercizio_js_35/output_test04.txt", "utf-8"));
    });

    test('TEST 05', () => {
        expect(tronca(
            fs.readFileSync("esercizio_js_35/input_test05.txt", "utf-8"),
            666
        )).toBe(fs.readFileSync("esercizio_js_35/output_test05.txt", "utf-8" ));
    });
});