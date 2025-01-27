export const tronca_parola = (s, pos) => {
    if (pos <= 0) {
        return "";
    }
    const parole = s.split(" ");
    if (pos >= parole.length) {
        return s;
    }
    if (pos < 0) {
        const validPos = parole.length + pos;
        return parole.slice(0, validPos).join(" ");
    }
    return parole.slice(0, pos).join(' ');
};