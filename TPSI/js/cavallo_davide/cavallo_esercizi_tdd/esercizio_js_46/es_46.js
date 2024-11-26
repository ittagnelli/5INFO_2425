export const prod_pow2 = (arr) => {
    return arr.reduce((prod, num) => prod * Math.pow(num, 2), 1);
};
