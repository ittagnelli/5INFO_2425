export function is_anagram(arr) {
    let set= new Set();
    let risultato = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        const sort = arr[i].split('').sort().join('');
        if (!set.has(sort)) set.add(sort); risultato.unshift(arr[i]);
    }
    return risultato;
}