/**
 * @param {Array} l 
 * @param {number} n 
 * @param {number} m 
 */
export const swap = (l, n, m) => {
    l.splice(m >= 0 ? m : l.length+m, 0, l.splice(n >= 0 ? n : l.length+n, 1));
    return l
};