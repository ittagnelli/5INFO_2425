/**
 * @param {Array} n 
 */
export const prod_pow2 = (n) => {
    let sum = 1;
    for (let i of n) {
        sum *= Math.pow(i, 2);
    }
    return sum;
};