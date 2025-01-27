export class Orario {
    constructor(ore, minuti, secondi) {
        this.ore = ore
        this.minuti = minuti
        this.secondi = secondi
    }

    calcolaOra(orario) {
        let arr = []

        let data1 = new Date()
        data1.setHours(this.ore, this.minuti, this.secondi, 0)

        let data2 = new Date()
        data2.setHours(orario.ore, orario.minuti, orario.secondi, 0)

        arr[0] = Math.abs(data2 - data1)
        arr[1] = arr[0] / 1000
        arr[2] = arr[1] / 60
        arr[3] = arr[2] / 60

        return arr
    }
}

function main() {
    let orario1 = new Orario(14, 30, 0)
    let orario2 = new Orario(16, 0, 0)

    const [millisecondi1, secondi1, minuti1, ore1] = orario1.calcolaOra(orario2)

    console.log("i millisecondi sono: " + millisecondi1)
    console.log("i secondi sono " + secondi1)
    console.log("i minuti sono: " + minuti1)
    console.log("le ore sono: " + ore1)

    let orario3 = new Orario(9, 15, 0)
    let orario4 = new Orario(12, 45, 30)

    const [millisecondi2, secondi2, minuti2, ore2] = orario3.calcolaOra(orario4)

    console.log("\n\ni millisecondi sono: " + millisecondi2)
    console.log("i secondi sono " + secondi2)
    console.log("i minuti sono: " + minuti2)
    console.log("le ore sono: " + ore2);

    
    
    
    
}

main()