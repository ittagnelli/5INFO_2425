/**
 * @param {string} str 
 */
export const unique_characters = (str) => {
    return [...new Set(str.split(""))].join("");
}