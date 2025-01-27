/** @param {string} text */
export function count_occurence(text) {
    const map = new Map();
    text.split(' ').forEach(str => map.set(str, (map.get(str) || 0) + 1));
    return map;
}
