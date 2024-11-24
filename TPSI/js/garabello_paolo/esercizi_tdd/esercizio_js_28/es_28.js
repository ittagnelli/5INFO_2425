/**@param {string} str */
export const upper_case = (str) => {
    return str.split("").map(letter => {
        if(letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122)
            return String.fromCharCode(letter.charCodeAt(0) - 32);
        else 
            return letter;
    }).join("");
}
