/** @param {number[]} n */
export const prod_pow2 = (n) => {
    let res = 1;
    n.forEach(num => res *= num ** 2);
    return res;
};