import { rm_string } from "./bramoso_esercizio_js_37.js";
import fs from 'fs';

describe("ESERCIZIO 37", () => {
    test('TEST 01', () => {
        expect(rm_string("The quick brown fox jumps over the lazy dog", "the")).toBe("The quick brown fox jumps over lazy dog");
    });

    test('TEST 02', () => {
        expect(rm_string("The quick brown fox jumps over the lazy dog", "ciro")).toBe("The quick brown fox jumps over the lazy dog");
    });

    test('TEST 03', () => {
        expect(rm_string("ciro ciro ciro", "ciro")).toBe("ciro ciro");
    });
});