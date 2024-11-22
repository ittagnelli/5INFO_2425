/** @param {any[]} l @param {number} n */
export const map_arr = (l, n) => {
    return l.map(el => el % n !== 0 ? el : 0);
};