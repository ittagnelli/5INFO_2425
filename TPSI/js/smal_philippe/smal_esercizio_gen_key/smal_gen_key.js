const ARRAY_PRIMI = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

function getN(p, q) {
    return p * q
}

function getV(p, q) {
    return (p - 1) * (q - 1)
}

function getNPriv(V) {
    return ARRAY_PRIMI.filter(value => (value < V)).pop()
}

function getNPub(NPriv) {
    let NPub = 1
    while (((((NPub - 1) * NPriv) % 20) != 1)) NPub += NPub == NPriv ? 2 : 1
    
    return NPub - 1
}

function genKey(p, q) {
    let N  = getN(p, q)
    let V = getV(p, q)
    let NPriv = getNPriv(V)
    let NPub = getNPub(NPriv)

    console.log(" N : " + N)
    console.log(" V : " + V)
    console.log(" NPriv : " + NPriv)
    console.log(" NPub : " + NPub)
}

genKey(process.argv[2], process.argv[3])