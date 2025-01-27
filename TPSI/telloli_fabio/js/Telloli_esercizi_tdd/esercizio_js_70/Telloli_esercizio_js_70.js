class calcolatrice {
    result = 0

    sum(numero) {
        this.result += numero
        return this
    }

    sub(numero) {
        this.result -= numero
        return this
    }

    mul(numero) {
        this.result *= numero
        return this
    }

    div(numero) {
        this.result /= numero
        return this
    }

    get_result() {
        console.log(this.result);
    }
}

function main() {
    let calcola = new calcolatrice()

    
    calcola.sum(11).mul(3).sum(5).sub(5).div(11).get_result()
}

main()