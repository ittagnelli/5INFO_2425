export const order = (l) => {
    if (!Array.isArray(l)) {
        throw new TypeError("Il parametro deve essere un array.");
    }
    if (!l.every(num => Number.isInteger(num) && num >= 0)) {
        throw new TypeError("L'array deve contenere solo numeri interi positivi.");
    }
    const isPrime = (num) => {
        if (num === 1) return true;
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    const primes = l.filter(isPrime);
    const nonPrimes = l.filter(num => !isPrime(num));
    return [...primes, ...nonPrimes];
};