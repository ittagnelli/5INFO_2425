export const upper_case = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const code = char.charCodeAt(0);
        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(code - 32);
        } else {
            result += char;
        }
    }
    return result;
};
