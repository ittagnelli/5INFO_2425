import { Automobile, Animale, Poligono } from "./es_75.js";

const car = new Automobile();
car.brand = "Honda";
car.model = "Civic Type R";
car.year = 2023;

const animale = new Animale();
animale.mammifero = true;
animale.peso = 100;
animale.specie = "Scimmia";

const poligono = new Poligono();
poligono.equiangolo = true;
poligono.add_lato(10);
poligono.triangolo = false;

describe("ESERCIZIO 75", () => {
    test('Test car enum', () => {
        expect(car.enumera()).toStrictEqual(["_brand", "_model", "_year"]);
    });
    test('Test animal enum', () => {
        expect(animale.enumera()).toStrictEqual(["_mammifero", "_peso", "_specie"]);
    });
    test('Test poligono enum', () => {
        expect(poligono.enumera()).toStrictEqual(["_equiangolo", "_triangolo", "_lato"]);
    });
});