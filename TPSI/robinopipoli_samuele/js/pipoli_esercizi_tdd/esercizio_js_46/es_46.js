export const prod_pow2 = (arr) => {
    return arr.reduce((acc, num) => acc * (num * num), 1);
};
