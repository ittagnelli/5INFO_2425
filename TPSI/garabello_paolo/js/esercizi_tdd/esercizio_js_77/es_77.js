export class Fibonacci {
    calc(n) {
        let fibo = [1, 1];
        for(let i = 2; i < n; i++)
            fibo[i] = fibo[i-1] + fibo[i-2];
        return fibo[n-1];
    }
}