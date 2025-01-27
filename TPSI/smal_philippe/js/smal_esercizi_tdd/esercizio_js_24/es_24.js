export const protect_email = (email) => {
    let strArray = email.split("@")
    let strMailNome = strArray[0].replace(".", "").slice(0, strArray[0].length / 2)
    return strMailNome + "...@" +strArray[1] 
};
