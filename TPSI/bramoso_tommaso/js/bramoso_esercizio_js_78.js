class Orario {
    constructor(ore, minuti, secondi) {
        this.ore = ore;
        this.minuti = minuti;
        this.secondi = secondi;
    }

    static orarioMinore(orario1, orario2) {
        const totaleSecondi1 = orario1.ore * 3600 + orario1.minuti * 60 + orario1.secondi;
        const totaleSecondi2 = orario2.ore * 3600 + orario2.minuti * 60 + orario2.secondi;

        return totaleSecondi1 < totaleSecondi2 ? orario1 : orario2;
    }

    toString() {
        return `${this.ore.toString().padStart(2, '0')}:${this.minuti.toString().padStart(2, '0')}:${this.secondi.toString().padStart(2, '0')}`;
    }
}

function main() {
    const orario1 = new Orario(14, 30, 0);
    const orario2 = new Orario(16, 45, 30);
    const orario3 = new Orario(12, 15, 15);

    const minore1 = Orario.orarioMinore(orario1, orario2);
    console.log(`Il minore tra ${orario1.toString()} e ${orario2.toString()} è ${minore1.toString()}`);

    const minore2 = Orario.orarioMinore(orario1, orario3);
    console.log(`Il minore tra ${orario1.toString()} e ${orario3.toString()} è ${minore2.toString()}`);
}

main();