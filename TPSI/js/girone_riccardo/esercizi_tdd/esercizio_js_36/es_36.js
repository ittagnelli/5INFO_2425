export const tronca_parola = (s, pos) => {
    let newStr = s.split(" ");

    if (pos == 0) {
        return "";
    }

    if (pos < 0) {
        let tronc = newStr.slice(0, newStr.length + pos).join(" ");
        return tronc;
    }

    let tronc = newStr.slice(0, newStr.length - pos).join(" ");
    return tronc;
};