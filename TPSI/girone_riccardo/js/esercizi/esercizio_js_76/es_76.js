class Orario {
    constructor(ore, minuti, secondi) {
        this.ore = ore;
        this.minuti = minuti;
        this.secondi = secondi;
    }

    differenza(orario) {
        const tempo1 = this.inSecondi(); 
        const tempo2 = orario.inSecondi(); 

        const differenza = Math.abs(tempo1 - tempo2); 

        const ore = Math.floor(differenza / 3600);
        const minuti = Math.floor((differenza % 3600) / 60);
        const secondi = differenza % 60;

        return { ore, minuti, secondi }; 
    }

    inSecondi() {
        return this.ore * 3600 + this.minuti * 60 + this.secondi;
    }
}

function main() {
    const orario1 = new Orario(10, 30, 15);
    const orario2 = new Orario(11, 15, 30);

    console.log("differenza", orario1.differenza(orario2));
}

main();