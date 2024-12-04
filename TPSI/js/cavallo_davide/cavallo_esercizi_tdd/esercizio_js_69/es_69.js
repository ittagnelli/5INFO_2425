class Quadrato {
    constructor(l) {
        this.lato = l; 
    }

    set lato(val) { this._lato = val; }

    get area() { return this._lato ** 2; }
    get perimetro(){ return this._lato *4}
}

q = new Quadrato(5);
console.log(q.area);  
console.log(q.perimetro);