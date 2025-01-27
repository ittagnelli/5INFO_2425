export const invert_case = (str) => {
    let newStr = ""

    for (const element of str) {
        if (element == element.toUpperCase()) {
            newStr = newStr.concat(element.toLowerCase())
        } else {
            newStr = newStr.concat(element.toUpperCase())
        }
    }

    return newStr
};
