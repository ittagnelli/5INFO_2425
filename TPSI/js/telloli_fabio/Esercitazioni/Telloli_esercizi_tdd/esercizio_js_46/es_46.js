export const prod_pow2 = (n) => {
    let prodotto = 1

    for (let i = 0; i < n.length; i++) {
        prodotto *= (n[i] * n[i])
    }

    return prodotto
};