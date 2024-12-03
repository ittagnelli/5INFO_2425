const nPrimi = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

function calcN(p, q) {
    return p * q
}

function calcV(p, q) {
    return (p - 1) * (q - 1)
}

function calcNpriv(V) {
    let Npriv = nPrimi.filter(value => (value < V)).pop()
    return Npriv
}

function calcNpub(Npriv, V) {
    let ris = 1;

    while ((ris * Npriv) % V != 1) {
        ris += 1;
    }

    return ris;
}

let p = process.argv[2]
let q = process.argv[3]

let N  = calcN(p, q);
let V = calcV(p, q);

let NPriv = calcNpriv(V);
let NPub = calcNpub(NPriv,V);

console.log("la N: " + N + " e la V: " + V);
console.log("Npriv: " + NPriv + ", Npub: " + NPub);