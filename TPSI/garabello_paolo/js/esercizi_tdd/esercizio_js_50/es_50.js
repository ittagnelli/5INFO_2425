function isPrime(num) {
    let prime = true;
    for(let i=2; i<num; i++) {
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

/**
 * @param {Array} l 
 */
export const order = (l) => {
    return [...l.filter(isPrime), ...l.filter(num => !isPrime(num))];
};