export const tronca = (str, l) => {
    if (l < str.length) {
        return str.slice(0, l) + "...";
    } else {
        return str;
    }
}
