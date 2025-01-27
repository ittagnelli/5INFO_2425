class Poligono {
    num;
    lun;

    perimetro() {
        return this.num * this.lun;
    }

    area() {
        return;
    }
}

class Triangolo extends Poligono {
    constructor(n, l) {
        super();
        this.num = n;
        this.lun = l;
    }
    
    area() {
        return 0.443 * (this.lun ** 2)
    }
}

class Quadrato extends Poligono {
    constructor(n, l) {
        super();
        this.num = n;
        this.lun = l;
    }
    
    area() {
        return this.lun * this.lun;
    }
}

class Pentagono extends Poligono {
    constructor(n, l) {
        super();
        this.num = n;
        this.lun = l;
    }
    
    area() {
        return 1.72 * (this.lun ** 2);
    }
}

class Esagono extends Poligono {
    constructor(n, l) {
        super();
        this.num = n;
        this.lun = l;
    }
    
    area() {
        return 2.598 * (this.lun ** 2);
    }
}

class Ettagono extends Poligono {
    constructor(n, l) {
        super();
        this.num = n;
        this.lun = l;
    }
    
    area() {
        return (7 / 4) * (this.lun ** 2) * 1.152;
    }
}

class Ottagono extends Poligono {
    constructor(n, l) {
        super();
        this.num = n;
        this.lun = l;
    }
    
    area() {
        return 2 * (this.lun ** 2) * (1 + Math.sqrt(2));
    }
}

let triangolo = new Triangolo(3, 15);
console.log("perimetro triangolo " + triangolo.perimetro());
console.log("area triangolo " + triangolo.area());

let quadrato = new Quadrato(4, 10);
console.log("perimetro quadrato " + quadrato.perimetro())
console.log("area quadrato " + quadrato.area());

let pentagono = new Pentagono(5, 21);
console.log("perimetro pentagono " + pentagono.perimetro())
console.log("area pentagono " + pentagono.area());

let esagono = new Esagono(6, 18);
console.log("perimetro esagono " + esagono.perimetro())
console.log("area esagono " + esagono.area());

let ettagono = new Ettagono(7, 9);
console.log("perimetro ettagono " + ettagono.perimetro())
console.log("area ettagono " + ettagono.area());

let ottagono = new Ottagono(8, 12);
console.log("perimetro ottagono " + ottagono.perimetro())
console.log("area ottagono " + ottagono.area());