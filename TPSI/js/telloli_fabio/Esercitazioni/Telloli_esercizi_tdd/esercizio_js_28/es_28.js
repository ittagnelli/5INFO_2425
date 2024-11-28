export const upper_case = (str) => {
    let newStr = "";

    for (const char of str) {
        if (char >= 'a' && char <= 'z') {
            newStr += String.fromCharCode(char.charCodeAt(0) - 32);
        } else {
            newStr += char;
        }
    }

    return newStr;
}
