export const special_concat = (str1, str2) => {
    if (str1 == "" || str2 == "" || str1.includes(" ") || str2.includes(" ")) {
        return "parole non adatte";
    } else {
        let stringa1 = str1.charAt(0) + str1.charAt(1);
        let stringa2 = str2.charAt(0) + str2.charAt(1);
        str1 = stringa2 + str1.slice(2, str1.length);
        str2 = stringa1 + str2.slice(2, str2.lenght);
        return str1 + str2;
    }
};