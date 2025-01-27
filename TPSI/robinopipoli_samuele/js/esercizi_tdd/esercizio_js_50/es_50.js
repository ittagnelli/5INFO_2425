const is_prime = (n) => {
    if (n <= 1) return true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

export const order = (arr) => {
    const primes = arr.filter(is_prime);
    const nonPrimes = arr.filter(num => !is_prime(num));
    return [...primes, ...nonPrimes];
};
