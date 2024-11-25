/**
 * @param {string} s 
 * @param {number} pos 
 */
export const tronca_parola = (s, pos) => {
    let newStr = s.split(" ");
    newStr.splice(pos); 
    return newStr.join(" ");
};