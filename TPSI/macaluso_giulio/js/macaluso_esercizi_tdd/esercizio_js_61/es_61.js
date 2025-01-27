export function count_occurence(text) {
    const map = new Map();
    const array = text.split(" ");

    for (let element of array) {
        map.set(element, (map.get(element) || 0) + 1);
    }
    return map;
}
