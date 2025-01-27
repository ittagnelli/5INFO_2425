class Automobile {
    constructor() {
        this.personeABordo = 0;
        this.velocita = 0;
        this.rapportoVelocita = 1;
        this.accesa = false;
    }

    setPersoneABordo(numero) {
        if (this.velocita > 0) {
            console.log("Impossibile cambiare il numero di persone a bordo mentre l'auto è in movimento.");
            return;
        }
        if (numero >= 0 && numero <= 5) {
            this.personeABordo = numero;
            this.stato();
        } else {
            console.log("Il numero di persone deve essere compreso tra 0 e 5.");
        }
    }

    setVelocita(nuovaVelocita) {
        if (!this.accesa) {
            console.log("Impossibile modificare la velocità: l'auto è spenta.");
            return;
        }
        const differenza = Math.abs(nuovaVelocita - this.velocita);
        if (nuovaVelocita >= 0 && nuovaVelocita <= 180 && differenza <= 30) {
            this.velocita = nuovaVelocita;
            this.stato();
        } else {
            console.log("La velocità deve essere compresa tra 0 e 180 e variare di massimo 30 km/h rispetto alla velocità attuale.");
        }
    }

    aumentaRapporto() {
        if (this.rapportoVelocita < 6) {
            this.rapportoVelocita++;
            this.stato();
        } else {
            console.log("Non è possibile superare la sesta marcia.");
        }
    }

    diminuisciRapporto() {
        if (this.rapportoVelocita > 1) {
            this.rapportoVelocita--;
            this.stato();
        } else {
            console.log("Non è possibile scendere sotto la prima marcia.");
        }
    }

    toggleAccensione() {
        this.accesa = !this.accesa;
        this.stato();
    }

    stato() {
        console.log(`Stato attuale: Persone a bordo: ${this.personeABordo}, Velocità: ${this.velocita} km/h, Marcia: ${this.rapportoVelocita}, Accesa: ${this.accesa ? "Sì" : "No"}`);
    }
}

function main() {
    const miaAuto = new Automobile();

    console.log("--- Accensione Auto ---");
    miaAuto.toggleAccensione();

    console.log("--- Imposta Persone a Bordo ---");
    miaAuto.setPersoneABordo(3);
    miaAuto.setVelocita(20);
    miaAuto.setPersoneABordo(4);

    console.log("--- Imposta Velocità ---");
    miaAuto.setVelocita(50);
    miaAuto.setVelocita(90);
    miaAuto.setVelocita(200);

    console.log("--- Cambio Marcia ---");
    miaAuto.aumentaRapporto();
    miaAuto.aumentaRapporto();
    miaAuto.aumentaRapporto();
    miaAuto.aumentaRapporto();
    miaAuto.aumentaRapporto();
    miaAuto.aumentaRapporto();
    miaAuto.diminuisciRapporto();
    miaAuto.diminuisciRapporto();
    miaAuto.diminuisciRapporto();
    miaAuto.diminuisciRapporto();
    miaAuto.diminuisciRapporto();
    miaAuto.diminuisciRapporto();

    console.log("--- Spegnimento Auto ---");
    miaAuto.toggleAccensione();
    miaAuto.setVelocita(30);
}

main();