import { concatenateN } from "./bramoso_esercizio_js_33.js";
import fs from 'fs';

describe("ESERCIZIO 33", () => {
    test('TEST 01', () => {
        expect(concatenateN("ciao!", 4)).toBe("ciao!ciao!ciao!ciao!");
    });

    test('TEST 02', () => {
        expect(concatenateN("ciro", 0)).toBe("");
    }); 

    test('TEST 03', () => {
        expect(concatenateN("echo...", 10)).toBe("echo...echo...echo...echo...echo...echo...echo...echo...echo...echo...");
    });
});