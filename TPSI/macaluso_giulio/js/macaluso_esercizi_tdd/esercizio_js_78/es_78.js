class Orario {
    constructor(ore, minuti, secondi) {
        this.ore = ore;
        this.minuti = minuti;
        this.secondi = secondi;
    }

    toMilliseconds() {
        return (this.ore * 3600 + this.minuti * 60 + this.secondi) * 1000;
    }

    trovaMinore(orario2, orario3) {
        const o1 = this.toMilliseconds();
        const o2 = orario2.toMilliseconds();
        const o3 = orario3.toMilliseconds();

        if (o1 < o2) {
            if (o1 < o3) {
                return this;
            } else {
                return orario3;
            }
        } else if (o2 < o3) {
            return orario2;
        } else {
            return orario3;
        }
    }
}

let orario1 = new Orario(10, 30, 15);
let orario2 = new Orario(12, 45, 30);
let orario3 = new Orario(9, 15, 0);

console.log("minore: ", orario1.trovaMinore(orario2, orario3));