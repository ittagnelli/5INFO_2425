export class Poligono {
    constructor(nLati) {
        this.nLati = nLati
    }

    perimetro(lato) {
        return this.nLati * lato
    }
}

export class Quadrato extends Poligono {
    constructor() {
        super(4)
    }

    calcArea(lato) {
        return lato ** 2
    }
}

export class TriangoloEquilatero extends Poligono {
    constructor() {
        super(3)
    }

    calcArea(lato) {
        return (Math.sqrt(3) / 4) * lato ** 2
    }
}

export class Pentagono extends Poligono {
    constructor() {
        super(5)
    }

    calcArea(lato) {
        const apotema = lato * 0.688
        return (this.perimetro(lato) * apotema) / 2
    }
}

export class Esagono extends Poligono {
    constructor() {
        super(6)
    }

    calcArea(lato) {
        return (3 * Math.sqrt(3) / 2) * lato ** 2
    }
}

export class Ettagono extends Poligono {
    constructor() {
        super(7)
    }

    calcArea(lato) {
        const apotema = lato * 1.038
        return (this.perimetro(lato) * apotema) / 2
    }
}

export class Ottagono extends Poligono {
    constructor() {
        super(8)
    }

    calcArea(lato) {
        return (4 * (lato ** 2)) * 1.207
    }
}

function main() {

    let latoQ = 10
    let quadrato = new Quadrato()
    console.log("figura: Quadrato, Perimetro: " + quadrato.perimetro(latoQ) + ",  Area: " + quadrato.calcArea(latoQ));

    const latoT = 15
    let trinagolo = new TriangoloEquilatero()
    console.log("figura: triangolo, Perimetro: " + trinagolo.perimetro(latoT) + ",  Area: " + trinagolo.calcArea(latoT).toFixed(2));
    
    const latoP = 21
    let pentagono = new Pentagono()
    console.log("figura: Pentagono, Perimetro: " + pentagono.perimetro(latoP) + ",  Area: " + pentagono.calcArea(latoP).toFixed(2));

    const latoE = 18
    let esagono = new Esagono()
    console.log("figura: Esagono, Perimetro: " + esagono.perimetro(latoE) + ",  Area: " + esagono.calcArea(latoE).toFixed(2));

    const latoEt = 9
    let ettagono = new Ettagono()
    console.log("figura: Ettagono, Perimetro: " + ettagono.perimetro(latoEt) + ",  Area: " + ettagono.calcArea(latoEt).toFixed(2));

    const latoO = 12
    let ottagono = new Ottagono()
    console.log("figura: Ottagono, Perimetro: " + ottagono.perimetro(latoO) + ",  Area: " + ottagono.calcArea(latoO).toFixed(2));
}   

main()
