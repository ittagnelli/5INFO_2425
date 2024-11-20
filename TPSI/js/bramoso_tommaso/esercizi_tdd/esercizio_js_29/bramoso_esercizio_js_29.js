export const invert_case = (str) => {
    return str
        .split("")
        .map((char) => {
            if (char >= "A" && char <= "Z") {
                return String.fromCharCode(char.charCodeAt(0) + 32);
            } else if (char >= "a" && char <= "z") {
                return String.fromCharCode(char.charCodeAt(0) - 32);
            } else if (char.toLocaleLowerCase() !== char.toLocaleUpperCase()) {
                return char === char.toLocaleLowerCase()
                    ? char.toLocaleUpperCase()
                    : char.toLocaleLowerCase();
            }
            return char;
        })
        .join("");
};