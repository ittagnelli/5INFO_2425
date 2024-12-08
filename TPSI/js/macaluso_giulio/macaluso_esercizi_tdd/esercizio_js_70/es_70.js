class Calcolatrice {
    constructor() {
        this.result = 0
    }

    sum(n) {
        this.result += n;
        return this;
    }

    sub(n) {
        this.result -= n;
        return this;
    }

    mol(n) {
        this.result *= n;
        return this;
    }

    div(n) {
        this.result /= n;
        return this;
    }
}

let calc = new Calcolatrice();
//console.log(calc.sum(6).sub(2).mol(5).sum(8).div(4));
console.log(calc.sum(11).mol(3).sum(5).sub(5).div(11));