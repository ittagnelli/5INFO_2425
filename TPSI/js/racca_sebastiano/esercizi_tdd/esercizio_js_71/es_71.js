export class Poligono {
  constructor(num_lati, valore_lati) {
    this.num_lati = num_lati;
    this.lato = valore_lati;
  }

  set num_lati(value) {
    this._num_lati = value;
  }

  get num_lati() {
    return this._num_lati;
  }

  set lato(value) {
    this._lato = value;
  }

  get lato() {
    return this._lato;
  }

  get perimetro() {
    return this.num_lati * this._lato;
  }

  get area() {
    throw new Error(`Metodo area non implementato per la classe base Poligono`);
  }
}

export class Quadrato extends Poligono {
  constructor(lato) {
    super(4, lato);
  }

  get area() {
    return this.lato ** 2;
  }
}

export class TriangoloEquilatero extends Poligono {
  constructor(lato) {
    super(3, lato);
  }

  get area() {
    return (this.lato ** 2 * Math.sqrt(3)) / 4;
  }
}

export class Pentagono extends Poligono {
  constructor(lato) {
    super(5, lato);
  }

  get area() {
    const apotema = this.lato / (2 * Math.tan(Math.PI / this.num_lati));
    return (this.perimetro * apotema) / 2;
  }
}

export class Esagono extends Poligono {
  constructor(lato) {
    super(6, lato);
  }

  get area() {
    const apotema = this.lato / (2 * Math.tan(Math.PI / this.num_lati));
    return (this.perimetro * apotema) / 2;
  }
}

export class Ettagono extends Poligono {
  constructor(lato) {
    super(7, lato);
  }

  get area() {
    const apotema = this.lato / (2 * Math.tan(Math.PI / this.num_lati));
    return (this.perimetro * apotema) / 2;
  }
}

export class Ottagono extends Poligono {
  constructor(lato) {
    super(8, lato);
  }

  get area() {
    const apotema = this.lato / (2 * Math.tan(Math.PI / this.num_lati));
    return (this.perimetro * apotema) / 2;
  }
}
