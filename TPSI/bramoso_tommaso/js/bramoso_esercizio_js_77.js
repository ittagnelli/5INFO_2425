class Fibonacci {
    static calcola(n) {
        if (n <= 0) return 0;
        if (n === 1) return 1;

        let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            const temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}

function main() {
    const testCases = [0, 1, 5, 10, 15];

    testCases.forEach((n) => {
        const risultato = Fibonacci.calcola(n);
        console.log(`Fibonacci(${n}) = ${risultato}`);
    });
}

main();