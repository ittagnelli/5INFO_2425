export const capitalize_all = (str) => {
    let array = str.split(" ");
    let stringa = "";

    array.forEach(element => {
        stringa += element.charAt(0).toUpperCase() + element.slice(1, element.length) + " ";
    });
    return stringa.trim();
}