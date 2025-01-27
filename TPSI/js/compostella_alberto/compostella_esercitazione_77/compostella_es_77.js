class Fibonacci {
    calcola(n) {
        if (n <= 0) return 0;
        if (n === 1) return 1;

        let a = 0, b = 1, temp = 0;
        for (let i = 2; i <= n; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}

let n1 = new Fibonacci();
console.log(n1.calcola(0));
let n2 = new Fibonacci();
console.log(n2.calcola(1));
let n3 = new Fibonacci();
console.log(n3.calcola(2));
let n4 = new Fibonacci();
console.log(n4.calcola(3));
let n5 = new Fibonacci();
console.log(n5.calcola(4));
