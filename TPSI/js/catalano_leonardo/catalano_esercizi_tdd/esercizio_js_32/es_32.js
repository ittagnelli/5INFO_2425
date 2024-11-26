export const special_concat = (str1, str2) => {
    if (!str1 || !str2 || str1.includes(" ") || str2.includes(" ")) {
        return "parole non adatte";
    }

    return str2.slice(0, 2) + str1.slice(2) + str1.slice(0, 2) + str2.slice(2);
};
