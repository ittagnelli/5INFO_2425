/** @param {string[]} arr */
export function is_anagram(arr) {
    return [...(new Map(arr.map(str => [str.split('').sort().join(''), str]))).values()];
}