/**
 * @param {Array} arr 
 * @param {number} a 
 * @param {number} b 
 */
export const between = (arr, a, b) => {
    return arr.filter(num => (num >= a && num <= b));
};