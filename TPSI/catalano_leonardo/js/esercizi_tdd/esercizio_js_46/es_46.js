export const prod_pow2 = (n) => {
    let risultato = 1;
    n.forEach(num => risultato *= num ** 2);
    return risultato;
};

