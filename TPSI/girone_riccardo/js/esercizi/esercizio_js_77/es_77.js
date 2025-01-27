class Fibonacci {
    calcola(n) {
        if (n <= 1) return n; 

        let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            let t = a + b;
            a = b; 
            b = t; 
        }
        return b; 
    }
}

function main() {
    let fib = new Fibonacci();
    console.log(fib.calcola(0)); 
    console.log(fib.calcola(1)); 
    console.log(fib.calcola(2)); 
    console.log(fib.calcola(3)); 
    console.log(fib.calcola(4)); 
}

main();
