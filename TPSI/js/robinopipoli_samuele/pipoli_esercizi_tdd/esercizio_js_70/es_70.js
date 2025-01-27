class Calcolatrice {
  result = 0;

  sum(a) {this.result +=  a; return this}
  sub(a) {this.result -=  a; return this }
  mul(a) {this.result *=  a; return this }
  div(a) {this.result /=  a; return this }

  get_result() { console.log(this.result) }
}

let calc = new Calcolatrice()
calc.sum(7).mul(2).sub(5).div(2).get_result()