export const count_vocals = (str) => {
    let array = str.toLowerCase().split("");
    let map = new Map();

    for (const element of array) {
        if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u') {
            map.set(element, (map.get(element) || 0) + 1);
        }
    }
    return map;
};
