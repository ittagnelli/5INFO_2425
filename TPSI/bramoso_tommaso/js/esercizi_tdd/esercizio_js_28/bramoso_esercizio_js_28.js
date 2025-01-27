export const upper_case = (str) => {
    const toUpper = (char) => {
        const code = char.charCodeAt(0);
        if (code >= 97 && code <= 122) {
            return String.fromCharCode(code - 32);
        }
        return char;
    };
    return str.split("").map(toUpper).join("");
};