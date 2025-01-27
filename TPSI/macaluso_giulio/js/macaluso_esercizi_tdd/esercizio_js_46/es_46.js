export const prod_pow2 = (n) => {
    let risultato = 1;

    n.forEach(element => {
        risultato = risultato * (element ** 2);
    });
    return risultato;
};