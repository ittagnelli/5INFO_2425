export function count_occurence(text) {
    let map = new Map();
    for (let el of text.split(" ")) map.set(el, (map.get(el) || 0) + 1);
    return map;
}