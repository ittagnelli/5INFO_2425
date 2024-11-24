export const abbreviazione = (str) => {
    let array = str.split(" ")
    
    return array[0].charAt(0).toUpperCase() + array[0].slice(1, array.lenght) + " " + array[1].charAt(0).toUpperCase() + ".";
}