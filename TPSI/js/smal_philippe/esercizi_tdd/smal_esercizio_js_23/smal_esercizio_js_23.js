export const abbreviazione = (str) => {
    let strArray = str.split(" ")
    return strArray[0][0].toUpperCase() + strArray[0].slice(1, strArray[0].lenght) + " " + strArray[1][0].toUpperCase() + "."
}

