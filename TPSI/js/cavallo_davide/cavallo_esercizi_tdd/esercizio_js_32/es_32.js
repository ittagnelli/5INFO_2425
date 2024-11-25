export const special_concat = (str1, str2) => {
    let FirstChar = str1.charAt(0) + str1.charAt(1)
    
    return (str1 != "") & (str2 != "") & (!str1.includes(" ")) & (!str2.includes(" ")) ? 
        str1.replace(FirstChar, str2.charAt(0) + str2.charAt(1)) + str2.replace(str2.charAt(0) + str2.charAt(1), FirstChar) : "parole non adatte"
};