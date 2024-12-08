/**
 * @param {number} n 
 * @param {number} m 
 */
export const unique_random_numbers = (n,m) => {
    let set = new Set();
    while(set.size != n)
        set.add(Math.floor(Math.random() * m));

    return [...set].sort();
}