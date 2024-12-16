class Orario {
    constructor(ore, minuti, secondi) {
        this.ore = ore;
        this.minuti = minuti;
        this.secondi = secondi;
    }

    differenza(orario2) {
        const msPerSecondo = 1000;
        const secondiPerMinuto = 60;
        const minutiPerOra = 60;
        const secondiPerOra = secondiPerMinuto * minutiPerOra;

        const totaleSecondi1 = this.ore * secondiPerOra + this.minuti * secondiPerMinuto + this.secondi;
        const totaleSecondi2 = orario2.ore * secondiPerOra + orario2.minuti * secondiPerMinuto + orario2.secondi;

        const differenzaSecondi = Math.abs(totaleSecondi1 - totaleSecondi2);

        return {
            millisecondi: differenzaSecondi * msPerSecondo,
            secondi: differenzaSecondi,
            minuti: differenzaSecondi / secondiPerMinuto,
            ore: differenzaSecondi / secondiPerOra,
        };
    }
}

function main() {
    const orario1 = new Orario(14, 30, 0);
    const orario2 = new Orario(16, 45, 30);

    const differenza1 = orario1.differenza(orario2);
    console.log("Differenza tra orario1 e orario2:", differenza1);

    const orario3 = new Orario(8, 15, 0);
    const orario4 = new Orario(12, 0, 0);

    const differenza2 = orario3.differenza(orario4);
    console.log("Differenza tra orario3 e orario4:", differenza2);
}

main();