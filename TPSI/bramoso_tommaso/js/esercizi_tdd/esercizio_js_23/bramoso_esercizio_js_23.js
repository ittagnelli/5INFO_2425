export const abbreviazione = (str) => {
    let array_str = str.split(" ");
    return array_str[0].charAt(0).toUpperCase() + array_str[0].slice(1, array_str[0].lenght) + " " + array_str[1].charAt(0).toUpperCase() + "."; 
}