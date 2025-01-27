import { Calcolatrice } from "./es_70.js";

describe("ESERCIZIO 70", () => {
    test('TEST 01', () => {
        expect((new Calcolatrice(6)).sub(2).mul(5).sum(8).div(4).result).toBe(7);
    });

    test('TEST 02', () => {
        expect((new Calcolatrice(11)).mul(3).sum(5).sub(5).div(11).result).toBe(3);
    }); 

    test('TEST 03', () => {
        expect((new Calcolatrice(29)).sum(2).sub(7).div(3).div(2).sum(1).mul(2).result).toBe(10);
    });

    test('TEST 04', () => { 
        expect(Math.round((new Calcolatrice(100)).sum(23).sub(70).div(300).div(210).sum(31).mul(20).result)).toBe(620);
    });

    test('TEST 05', () => {
        expect((new Calcolatrice(3)).div(2).result).toBe(1.5);
    });
});