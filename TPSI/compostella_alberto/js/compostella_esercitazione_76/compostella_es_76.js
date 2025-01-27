class Orario {
    constructor(ore, minuti, secondi) {
        this.ore = ore;
        this.minuti = minuti;
        this.secondi = secondi;
    }

    differenza(orario) {
        const orario1 = this.toMilliseconds();
        const orario2 = orario.toMilliseconds();

        const diffInMs = Math.abs(orario1 - orario2);

        const diffInSeconds = diffInMs / 1000;
        const diffInMinutes = diffInSeconds / 60;
        const diffInHours = diffInMinutes / 60;

        return {
            millisecondi: diffInMs,
            secondi: diffInSeconds,
            minuti: diffInMinutes,
            ore: diffInHours
        };
    }

    toMilliseconds() {
        return (this.ore * 3600 + this.minuti * 60 + this.secondi) * 1000;
    }
}

const orario1 = new Orario(10, 30, 15);
const orario2 = new Orario(12, 45, 30);

console.log("Differenza:", orario1.differenza(orario2));
