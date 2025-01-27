export const prod_pow2 = (arr) => {
    const squares = arr.map(num => Math.pow(Number(num), 2));
    return squares.reduce((acc, curr) => acc * curr, 1);
};