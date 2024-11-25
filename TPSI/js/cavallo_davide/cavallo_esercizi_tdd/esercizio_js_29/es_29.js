export const invert_case = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else if (char === char.toLowerCase()) {
            result += char.toUpperCase();
        } else {
            result += char;
        }
    }
    return result;
};
