export class Calcolatrice {
    constructor() {
        this.result = 0;
    }

    set_result(value) {
        this.result = value;
        return this;
    }

    sum(value) {
        this.result += value;
        return this;
    }

    sub(value) {
        this.result -= value;
        return this;
    }

    mul(value) {
        this.result *= value;
        return this;
    }

    div(value) {
        this.result /= value;
        return this;
    }

    get_result() {
        return this.result;
    }
}
