import { rm_string } from "./es_37.js";
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

    test('TEST 04', () => {
        expect(rm_string(
            fs.readFileSync('esercizio_js_37/input_test04.txt', 'utf-8'),
            'finibus'
        )).toBe(fs.readFileSync('esercizio_js_37/output_test04.txt', 'utf-8'));
    });

    test('TEST 05', () => {
        expect(rm_string(
            fs.readFileSync('esercizio_js_37/input_test05.txt', 'utf-8'),
            'Paper'
        )).toBe(fs.readFileSync('esercizio_js_37/output_test05.txt', 'utf-8'));
    });
});