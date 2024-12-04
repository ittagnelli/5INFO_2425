class Calcolatrice {
    risultato = 0;   
    sum(a){
        this.risultato = this.risultato+a
        return this 
    }
    sub(a){
        this.risultato = this.risultato-a
        return this 
    }
    mul(a){
        this.risultato = this.risultato*a
        return this 
    }
    div(a){
        this.risultato = this.risultato/a
        return this 
    }
    get_ris(){
        console.log(this.risultato)
    }
}

let calc = new Calcolatrice()
calc.sum(6).sub(2).mul(5).sum(8).div(4).get_ris()
calc.mul(11).mul(3).sum(5).sub(5).div(11).get_ris()
calc.sum(29).sum(2).sub(7).div(3).div(2).sum(1).mul(2).get_ris()