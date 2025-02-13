import { prod_pow2 } from './bramoso_esercizio_js_46.js'
import fs from 'fs';

describe("ESERCIZIO 46", () => {
    test('TEST 01', () => {
        expect(prod_pow2([1, 2, 3, 4, 5])).toBe(14400);
    });

    test('TEST 02', () => {
        expect(prod_pow2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(13168189440000);
    });

    test('TEST 03', () => {
        expect(prod_pow2(Array.from(Array(69).keys()))).toBe(0);
    });
});