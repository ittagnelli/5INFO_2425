export function is_anagram(arr) {
    return [...words(new Map(arr.map(item => [item, item.toLowerCase().split('').sort().join('')]))).values()];
}