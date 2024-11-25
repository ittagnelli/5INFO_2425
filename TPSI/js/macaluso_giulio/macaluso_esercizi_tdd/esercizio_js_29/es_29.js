export const invert_case = (str) => {
    let stringa = "";
    str.split("").forEach(element => {
        if (element === element.toUpperCase()) {
            stringa += element.toLowerCase();
        } else {
            stringa += element.toUpperCase();
        }
    });
    return stringa;
};