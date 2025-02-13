const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

/**
 * @param {number} Npriv 
 * @param {number} V 
 * @param {number} index 
 */
function findNpubIndex(Npriv, V, index) {
    let Npub, count = 0;
    for(Npub = 1;;Npub++) {
        if((Npub*Npriv) % V == 1)
            if(++count == index)
                break;
    }
    return Npub;
}

function findNpub(Npriv, V) {
    let Npub;
    for(Npub = 1;;Npub++) {
        if((Npub*Npriv) % V == 1)
            if(Npriv != Npub)
                break;
    }
    return Npub;
}

/**
 * @param {number} p 
 * @param {number} q 
 */
function findKeys(p, q) {
    let Keys = [];
    const N = p*q;
    const V = (p-1)*(q-1);
    let Npriv = (primeNumbers.filter(n => n < V)).pop();
    Keys.push([N, Npriv], [N, findNpub(Npriv, V, 2)]);
    return Keys;
}

if(process.argv.length != 4)
    process.exit(1);
    
[,,p, q] = process.argv
console.log(findKeys(p, q));