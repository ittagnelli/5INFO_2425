/**
 * @param {Array} l 
 * @param {number} n 
 */
export const map_arr = (l, n) => {
   return l.map(i => { return i % n == 0 ? 0 : i });
};