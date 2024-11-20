export const special_concat = (str1, str2) => {
    if (!str1 || !str2 || str1.includes(" ") || str2.includes(" ")) {
        return "parole non adatte";
    }
    const newStr1 = str2.slice(0, 2) + str1.slice(2, str1.lenght);
    const newStr2 = str1.slice(0, 2) + str2.slice(2, str2.lenght);
    return newStr1 + newStr2;
};