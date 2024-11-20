import { insert } from "./bramoso_esercizio_js_34.js";
import fs from 'fs';

describe("ESERCIZIO 34", () => {
    test('TEST 01', () => {
        expect(insert("Facciamo tanti esercizi che ci fanno bene", "JavaScript", 23)).toBe("Facciamo tanti esercizi JavaScript che ci fanno bene");
    });

    test('TEST 02', () => {
        expect(insert("C'era una volta tanto tempo fa\nin una galassia lontana ...\nSTAR WARS", "lontana", 46)).toBe("C'era una volta tanto tempo fa\nin una galassia lontana lontana ...\nSTAR WARS");
    }); 

    test('TEST 03', () => {
        expect(insert("it0Eikoh8", "ciro", 6)).toBe("it0Eik ciro oh8");
    });
});