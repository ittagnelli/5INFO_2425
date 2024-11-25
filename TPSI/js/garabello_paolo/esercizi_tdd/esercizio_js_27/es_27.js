/**@param {string} str */
export const capitalize_all = (str) => {
    return str.split(" ").map(word => {
        return word.charAt(0).toLocaleUpperCase() + word.slice(1);
    }).join(" ");
}