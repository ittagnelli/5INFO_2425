export const map_arr = (l, n) => {
    if (!Array.isArray(l)) {
        throw new TypeError("Il primo parametro deve essere un array.");
    }
    if (typeof n !== "number" || isNaN(n)) {
        throw new TypeError("Il secondo parametro deve essere un numero.");
    }
    if (n <= 0) {
        throw new RangeError("Il numero deve essere maggiore di zero.");
    }
    return l.map(element => {
        if (typeof element !== "number" || isNaN(element)) {
            throw new TypeError("L'array deve contenere solo numeri.");
        }
        return element % n === 0 ? 0 : element;
    });
};