export class Orario {
    constructor (ore, minuti, secondi) {
        this.ore = ore
        this.minuti = minuti
        this.secondi = secondi
    }

    static trovaMin(orario1, orario2, orario3) {
        const secondi1 = orario1.ore * 3600 + orario1.minuti * 60 + orario1.secondi
        const secondi2 = orario2.ore * 3600 + orario2.minuti * 60 + orario2.secondi
        const secondi3 = orario3.ore * 3600 + orario3.minuti * 60 + orario3.secondi

        if (secondi1 <= secondi2 && secondi2 <= secondi3) {
            return orario1
        } else if (secondi2 <= secondi1 && secondi2 <= secondi3) {
            return orario2
        } else {
            return orario3
        }
    }

    toString() {
        return "h:" + this.ore + " m:" + this.minuti + " s:" + this.secondi
    }
}

function main() {
    const orario1 = new Orario(10, 30, 45)
    const orario2 = new Orario(8, 15, 50)
    const orario3 = new Orario(12, 5, 30)

    const minore1 = Orario.trovaMin(orario1, orario2, orario3)
    console.log("orario minore: " + minore1.toString())


    const orario4 = new Orario(6, 20, 30)
    const orario5 = new Orario(5, 45, 15)
    const orario6 = new Orario(6, 20, 25)

    const minore2 = Orario.trovaMin(orario4, orario5, orario6)
    console.log("\norario minore: " + minore2.toString())
    
}

main()
