/** @param {string} str */
export const upper_case = (str) => {
    return str
        .split("")
        .map(char => {
            const ascii = char.charCodeAt(0);
            if (ascii >= 97 && ascii <= 122) {
                return String.fromCharCode(ascii - 32);
            }
            return char;
        })
        .join("");
};
