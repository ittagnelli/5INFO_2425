class Poligono {
    constructor(lunghezzaLato, numeroLati) {
        this.lunghezzaLato = lunghezzaLato;
        this.numeroLati = numeroLati;
    }

    perimetro() {
        return this.lunghezzaLato * this.numeroLati;
    }

    area() {
        if (this.numeroLati < 3) {
            return 0;
        }
        const apotema = this.lunghezzaLato / (2 * Math.tan(Math.PI / this.numeroLati));
        return (this.perimetro() * apotema) / 2;
    }

    stampa() {
        console.log(`Poligono con ${this.numeroLati} lati di lunghezza ${this.lunghezzaLato} cm:`);
        console.log(`- Perimetro: ${this.perimetro().toFixed(2)} cm`);
        console.log(`- Area: ${this.area().toFixed(2)} cm²\n`);
    }
}

function main() {
    const poligoni = [
        new Poligono(15, 3),
        new Poligono(10, 4),
        new Poligono(21, 5),
        new Poligono(18, 6),
        new Poligono(9, 7),
        new Poligono(12, 8)
    ];

    poligoni.forEach(poligono => poligono.stampa());
}

main();