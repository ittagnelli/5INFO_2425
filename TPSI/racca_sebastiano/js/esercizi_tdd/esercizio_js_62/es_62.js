/** @param {number} n @param {number} m */
export const unique_random_numbers = (n,m) => {
    return [...new Set(Array.from({ length: n}, (v, k) => Math.floor(Math.random() * m) + 1))].sort();
}