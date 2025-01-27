export const order = (l) => {
    return l.filter(isPrime).concat(l.filter(x => !isPrime(x)))
};

let isPrime = (value) => {
    if (value == 0) return true;
    if (value < 1) return false;
    if (value == 2) return true;
    if ((value % 2) == 0) return false;
    for (let i = 3; i <= Math.sqrt(value); i+=2) if ((value % i) == 0) return false;
    return true;
};