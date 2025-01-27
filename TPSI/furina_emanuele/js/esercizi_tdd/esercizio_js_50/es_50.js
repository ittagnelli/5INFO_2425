export const order = (arr) => {
    if (arr.length <= 7) {
        return arr;
    }
    const firstPart = arr.slice(0, 7);
    const restPart = arr.slice(7);
    const sortedFirst = firstPart.sort((a, b) => a - b);
    return [...sortedFirst, ...restPart];
};