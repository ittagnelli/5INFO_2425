class Quadrato {
    constructor(l) {
        this.lato = l;
    }

    set lato(val) { 
        this._lato = val; 
    }
    get lato() {
        return this._lato;
    }

    get area() {
        return this._lato ** 2;

    }
    get perimetro() { return this._lato * 4; }

}
function main(){
    q = new Quadrato(5);
console.log(q.area);
console.log(q.perimetro);
}
main()      