/**
 * @param {Array} arr 
 */
export function is_anagram(arr) {
    return [...(new Map(arr.map(item => {return [item.toLowerCase().split("").sort().join(""), item]}))).values()];
}