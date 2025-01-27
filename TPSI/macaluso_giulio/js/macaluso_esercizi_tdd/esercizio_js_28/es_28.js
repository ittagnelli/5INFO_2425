export const upper_case = (str) => {
    let stringa = "";
    let char;
    str.toLowerCase();
    str.split("").forEach(element => {
        char = element.charCodeAt(0);
        stringa += String.fromCharCode((char > 96 & char < 123) ? char - 32 : char);
    });
    return stringa;
}
