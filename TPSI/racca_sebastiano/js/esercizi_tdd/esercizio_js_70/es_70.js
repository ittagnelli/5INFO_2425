export class Calcolatrice {
  constructor(a) {
    this.result = a;
  }

  sum(a) {
    this.result += a;
    return this;
  }

  sub(a) {
    this.result -= a;
    return this;
  }

  mul(a) {
    this.result *= a;
    return this;
  }

  div(a) {
    this.result /= a;
    return this;
  }

  set result(a) {
    this._result = a;
  }

  get result() {
    return this._result
  }
}