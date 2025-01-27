class Orario {
    constructor(ore, minuti, secondi) {
        this.ore = ore;
        this.minuti = minuti;
        this.secondi = secondi;
    }

    inSecondi() {
        return this.ore * 3600 + this.minuti * 60 + this.secondi; 
    }

    ilMinore(orario2, orario3) {
        const o1 = this.inSecondi();
        const o2 = orario2.inSecondi();
        const o3 = orario3.inSecondi();

        if (o1 <= o2 && o1 <= o3) return this;
        if (o2 <= o1 && o2 <= o3) return orario2;
        return orario3;
    }
}

function main() {
    let orario1 = new Orario(8, 20, 25);
    let orario2 = new Orario(10, 35, 30);
    let orario3 = new Orario(9, 25, 10);

    console.log("il minore", orario1.ilMinore(orario2, orario3));
}

main();