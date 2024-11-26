export const special_concat = (str1, str2) => {
    if (!str1 || !str2 || str1.includes(" ") || str2.includes(" ")) {
        return "parole non adatte"
    }
    
    
    let newStr1, newStr2
    
    newStr1 = str2.slice(0, 2) + str1.slice(2)
    newStr2 = str1.slice(0, 2) + str2.slice(2)

    return newStr1.concat(newStr2)
};