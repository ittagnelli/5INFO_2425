class calcolatrice {
    result = 0;
    som(num) {
        this.result += num
        return this
    }
    sott(num) {
        this.result -= num
        return this
    }
    molt(num) {
        this.result *= num
        return this
    }
    div(num) {
        this.result /= num
        return this
    }

    get_result() {console.log(this.result)}
}

function main() {
    calcola = new calcolatrice()
    calcola.som(11).molt(3).som(5).sott(5).div(11).get_result()
}

main()