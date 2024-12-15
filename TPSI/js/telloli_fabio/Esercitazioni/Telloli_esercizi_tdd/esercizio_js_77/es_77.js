export class Fibonacci {
    calcFibonacci(n) {
        if (n == 1) {
            return 0
        } else if (n == 2) {
            return 1
        }

        let a = 0
        let b = 1
        let ris = 0

        for (let i = 3; i <= n; i++) {
            ris = a + b
            a = b
            b = ris
        }

        return ris
    }
}

function main() {
    const fibonacci = new Fibonacci()
    const numeri = [1, 2, 6, 9, 12, 15, 20]

    console.log("Successione: \n");

    for (let i = 0; i < numeri.length; i++) {
        const n = numeri[i];
        const risultato = fibonacci.calcFibonacci(n)
        console.log("F: " + n + " = " + risultato)
    } 
    
}

main()