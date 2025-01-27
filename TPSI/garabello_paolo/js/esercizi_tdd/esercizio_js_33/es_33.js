/**
 * @param {string} s 
 * @param {number} n 
 */
export const concatenateN = (s, n) => {
    let string = "";
    for (let i = 0; i < n; i++)
            string += s;
    return string;
};
