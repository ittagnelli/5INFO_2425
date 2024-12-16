export const abbreviazione = (str) => {
    let strArray = str.split(" ")
    let strNome = strArray[0][0].toUpperCase() + strArray[0].slice(1, strArray[0].lenght)
    return strNome + " " + strArray[1][0].toUpperCase() + ".";
}

