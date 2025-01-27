export function count_occurence(text) {
    let map = new Map();
    
    for (let element of text.split(" ")) map.set(element, (map.get(element) || 0) + 1);
    return map;
}