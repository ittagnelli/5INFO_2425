export class Animale {
    set mammifero(mammifero) {
        this._mammifero = mammifero;
    }
    get mammifero() {
        return this._mammifero;
    }
    set peso(peso) {
        this._peso = peso;
    }
    get peso() {
        return this._peso
    }
    set specie(specie) {
        this._specie = specie;
    }
    get specie() {
        return this._specie
    }

    enumera() {
        return Object.keys(this);
    }
}

export class Automobile {
    set brand(brand) {
        this._brand = brand;
    }
    get brand() {
        return this._brand;
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
    set year(year) {
        this._year = year;
    }
    get year() {
        return this._year;
    }

    enumera() {
        return Object.keys(this);
    }
}

export class Poligono {
    set equiangolo(equiangolo) {
        this._equiangolo = equiangolo;
    }
    get equiangolo() {
        return this._equiangolo;
    }
    set lato(lato) {
        this._lato = lato;
    }
    get lato() {
        return this._lato;
    }
    set triangolo(triangolo) {
        this._triangolo = triangolo;
    }
    get triangolo() {
        return this._triangolo;
    }

    enumera() {
        return Object.keys(this);
    }
}
