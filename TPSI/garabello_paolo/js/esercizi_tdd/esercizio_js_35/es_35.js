/**
 * 
 * @param {string} s 
 * @param {number} n 
 */
export const tronca = (s, n) => {
    if(s.length > n)
        return s.substring(0, n) + "...";
    return "stringa on valido";
};
