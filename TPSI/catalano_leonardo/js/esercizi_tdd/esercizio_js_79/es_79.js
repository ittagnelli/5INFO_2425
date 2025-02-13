class Automobile {
    constructor(persone, velocita, marcia, stato) {
        this.persone = persone;
        this.velocita = velocita;
        this.marcia = marcia;
        this.stato = stato; 
    }

    accendiSpegni() {
        this.stato = !this.stato; 
    }

    setPersone(per) {
        if (this.stato) this.persone = per; 
    }

    setVelocita(vel) {
        if (this.stato && vel >= 0 && vel <= 180 && Math.abs(this.velocita - vel) <= 30) {
            this.velocita = vel; 
        }
    }

    setMarcia(mar) {
        if (this.stato && mar >= 1 && mar <= 6 && Math.abs(this.marcia - mar) === 1) {
            this.marcia = mar; 
        }
    }
}


function main() {
    let auto = new Automobile(3, 80, 4, true);  
    console.log(auto);  
    
    auto.setPersone(2);  
    console.log(auto);
    
    auto.setVelocita(40); 
    console.log(auto);
    
    auto.accendiSpegni(); 
    console.log(auto);
    
    auto.setMarcia(4);  
    console.log(auto);
    
    auto.accendiSpegni();  
    console.log(auto);
    
    auto.setMarcia(6);  
    console.log(auto);
}


main();
