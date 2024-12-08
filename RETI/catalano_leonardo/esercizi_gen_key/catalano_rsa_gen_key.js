const input = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
const p = 3
const q = 11

const N = calcolaN(p, q)
console.log(N)
const V = calcolaV(p, q)
console.log(V)
const Npriv = calcolaNpriv(input, V)
console.log(Npriv)
const Npub = calcolaNPub(Npriv)
console.log(Npub)




function calcolaN(p, q) {
    let risN = p * q
    return risN
}
function calcolaV(p, q) {
    let risV = (p - 1) * (q - 1)
    return risV
}
function calcolaNpriv(primi, V) {
    let risultato = primi.filter((value) => value < V);
    return risultato[risultato.length - 1]
}
function calcolaNPub(Npriv) {
    let risultatoPub = 1;
    while ((risultatoPub * Npriv) % V !== 1) {
        risultatoPub += 1;
    }
    return risultatoPub;
}









