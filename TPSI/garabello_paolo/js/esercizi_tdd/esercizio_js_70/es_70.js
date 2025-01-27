export class Calcolatrice {
  constructor(a) {
    this.result = a
  }
  sum(a) {
    this.result = this.result + a;
    return this;
  }
  sub(a) {
    this.result = this.result - a;
    return this;
  }
  mul(a) {
    this.result = this.result * a;
    return this;
  }
  div(a) {
    this.result = this.result / a;
    return this;
  }
  get result() {
    return this._result;
  }
  set result(a) {
    this._result = a;
    return this;
  }
}