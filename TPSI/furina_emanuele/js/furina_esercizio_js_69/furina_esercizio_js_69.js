const lato = 5

class Quadrato{
    constructor(l){
        this.lato = l;
    }
    
    set lato(l){
        this._lato = l;
    }

    get lato(){
        return this._lato;
    }

    area(){
        return this.lato * this.lato;
    }
    
    perimetro(){
        return this.lato * 4;
    }
}


let q = new Quadrato(lato);

console.log("Area " + q.area());
console.log("Perimetro " + q.perimetro());
