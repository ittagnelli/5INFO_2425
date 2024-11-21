export const dec_to_bin = (n) => {
    if (typeof n !== 'string') {
        throw new TypeError("Il parametro deve essere una stringa.");
    }
    if (!/^[01]+$/.test(n)) {
        throw new Error("La stringa deve rappresentare un numero binario valido.");
    }
    return parseInt(n, 2);
};