export class Automobile {
    constructor () {
        this.velocita = 0
        this.persone = 0
        this.rappVelocita = 1
        this.avvio = false
    }

    setPersone(persone) {
        if (this.velocita > 0) {
            console.log("non puoi cambiare il numero di persone quando la macchina è in moviemento");
            return
        }

        if (persone >= 0 && persone <= 5) {
            this.persone = persone
            this.status()
        } else {
            console.log("il numero di persone deve essere compreso tra 0 e 5")
        }
    }

    setVelocita(nVelocita) {
        if (!this.avvio) {
            console.log("non puoi cambiare la velocita la macchina è spenta")
            return
        } 

        const differenza = Math.abs(nVelocita - this.velocita)
    
        if (nVelocita >= 0 && nVelocita <= 180 && differenza <= 30) {
            this.velocita = nVelocita;
            this.status()
        } else {
            console.log("la velocità deve essere compresa tra 0 e 180");
        }
    }

    aumentaMarcia() {
        if (this.velocita > 0) {
            console.log("non puoi cambiare marcia, la macchina è spenta");
            return
        }

        if (this.rappVelocita < 6) {
            this.rappVelocita++
            this.status()
        } else {
            console.log("La marcia è già al massimo")
        }
    }

    diminuisciMarcia() {
        if (!this.avvio) {
            console.log("non puoi cambiare marcia, la macchina è spenta!")
            return
        }
        if (this.rappVelocita > 1) {
            this.rappVelocita--
            this.status()
        } else {
            console.log("La marcia è già al minimo!")
        }
    }

    Avvio() {
        this.avvio = !this.avvio

        console.log("L'automobile è ora " + (this.avvio ? "ACCESA" : "SPENTA"))
        this.status()
    }

    status() {
        console.log("stato macchina = persone: " + this.persone + ", velocità: " + this.velocita + "km/h, Marcia: " + this.rappVelocita + ", accensione: " + (this.avvio ? "accesa" : "spenta"));
    }
}

function main() {
    const auto = new Automobile()

    auto.Avvio()

    auto.setPersone(4)
    auto.setVelocita(30)
    auto.setVelocita(100)

    auto.aumentaMarcia()
    auto.diminuisciMarcia()

    auto.setPersone(2)
    auto.Avvio()
    auto.setVelocita(50)
    auto.aumentaMarcia()
}

main()