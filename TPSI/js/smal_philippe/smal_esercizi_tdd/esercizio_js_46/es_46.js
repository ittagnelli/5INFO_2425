export const prod_pow2 = (n) => {
    let prodotto = 1
    n.forEach(element => { prodotto = prodotto * (element ** 2) })
    return prodotto
}