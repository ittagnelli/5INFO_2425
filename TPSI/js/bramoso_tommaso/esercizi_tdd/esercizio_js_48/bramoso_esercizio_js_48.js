export const sub_arr = (l, n) => {
    if (!Array.isArray(l)) {
        throw new TypeError("L'input deve essere un array.");
    }
    if (typeof n !== "number" || isNaN(n)) {
        throw new TypeError("Il secondo parametro deve essere un numero.");
    }
    if (n <= 0) {
        return [];
    }
    return l.slice(-n);
};