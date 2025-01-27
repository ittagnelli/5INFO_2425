class Enumera {
  enumera() {
    return Object.keys(this);
  }
}

export class Animale extends Enumera {
  _mammifero;
  set mammifero(value) {
    this._mammifero = value;
  }

  get mammifero() {
    return this._mammifero;
  }
  _peso;
  set peso(value) {
    this._peso = value;
  }

  get peso() {
    return this._peso;
  }
  _specie;
  set specie(value) {
    this._specie = value;
  }

  get specie() {
    return this._specie;
  }
}

export class Automobile extends Enumera {
  _brand;
  set brand(value) {
    this._brand = value;
  }
  get brand() {
    return this._brand;
  }
  _model;
  set model(value) {
    this._model = value;
  }
  get model() {
    return this._model;
  }
  _year;
  set year(value) {
    this._year = value;
  }
  get year() {
    return this._year;
  }
}

export class Poligono extends Enumera {
  _equiangolo;
  set equiangolo(value) {
    this._equiangolo = value;
  }
  get equiangolo() {
    return this._equiangolo;
  }
  _triangolo;
  set triangolo(value) {
    this._triangolo = value;
  }
  get triangolo() {
    return this._triangolo;
  }

  _lato;
  add_lato(value) {
    this._lato = value;
  }
}
