export const tronca_parola = (s, pos) => {
    let stringa;
    stringa = s.split(" ");

    if (pos > 0) {
        return stringa.slice(0, pos).join(" ");
    } else if (pos < 0) {
        return stringa.reverse().slice((pos * -1), stringa.length).reverse().join(" ");
    } else {
        return "";
    }
};