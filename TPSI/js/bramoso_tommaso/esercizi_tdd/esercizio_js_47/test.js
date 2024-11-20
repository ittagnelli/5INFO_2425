import {sub_arr} from './bramoso_esercizio_js_47.js';
import fs from 'fs';

describe("ESERCIZIO 47", () => {
    test('TEST 01', () => {
        expect(sub_arr([0, 1, 2, 3, 4], 3).toString()).toBe('0,1,2');
    });

    test('TEST 02', () => {
        expect(sub_arr([
            0, 1, 2 ,3, 4,
            5, 6, 7, 8, 9,
        ], -1).toString()).toBe('');
    });

    test('TEST 03', () => {
        expect(sub_arr(
            Array.from(Array(1000).keys()), 69
        ).toString()).toBe(
            Array.from(Array(69).keys()).toString()
        );
    });
});