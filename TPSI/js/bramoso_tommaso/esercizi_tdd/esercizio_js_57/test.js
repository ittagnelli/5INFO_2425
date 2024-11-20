import { names } from "./bramoso_esercizio_js_57.js";
import fs from 'fs';

describe("ESERCIZIO 57", () => {
    test('TEST 01', () => {
        expect(names([
            { nome: "Marco", classe: 4, eta: 17 },
            { nome: "Alex", classe: 2, eta: 15 },
            { nome: "William", classe: 4, eta: 18 }
        ]).toString()).toBe(["Marco", "Alex", "William"].toString());
    });

    test('TEST 02', () => {
        expect(names([
            { nome: "Marco", classe: 4, eta: 17 },
            { nome: "Alex", classe: 2, eta: 15 },
            { nome: "William", classe: 4, eta: 18 },
            { nome: "Ciro", classe: 3, eta: 15 },
            { nome: "Gino", classe: 4, eta: 16 },
            { nome: "Pippo", classe: 5, eta: 19 },
            { nome: "Lino", classe: 1, eta: 13 },
            { nome: "Mario", classe: 1, eta: 14 },
            { nome: "Lillo", classe: 5, eta: 20 }
        ]).toString()).toBe([
            "Marco",
            "Alex",
            "William",
            "Ciro",
            "Gino",
            "Pippo",
            "Lino",
            "Mario",
            "Lillo"
        ].toString());
    });

    test('TEST 03', () => {
        expect(names(Array(123).fill().map((e, i) => e = {
            nome: 'p' + i.toString(),
            classe: Math.floor(Math.random() * 5) + 1,
            eta: i + 69
        })).toString()).toBe(Array(123).fill().map((_, i) => 'p' + i.toString()).toString());
    });
});