export function is_anagram(arr) {
    let seen = new Set();
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        const sorted = arr[i].split('').sort().join('');
        if (!seen.has(sorted)) seen.add(sorted); result.unshift(arr[i]);
    }
    return result;
}