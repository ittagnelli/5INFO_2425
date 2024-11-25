export const upper_case = (str) => {
    str.split('').map(char => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 ? String.fromCharCode(char.charCodeAt(0) - 32) : char).join('');
};
