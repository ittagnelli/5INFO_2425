export const prod_pow2 = (n) => {
    if (!Array.isArray(n)) {
        throw new TypeError("L'input deve essere un array di numeri.");
    }
    if (n.some(elemento => typeof elemento !== "number")) {
        throw new TypeError("Tutti gli elementi dell'array devono essere numeri.");
    }
    return n.reduce((prodotto, numero) => {
        return prodotto * Math.pow(numero, 2);
    }, 1);
};