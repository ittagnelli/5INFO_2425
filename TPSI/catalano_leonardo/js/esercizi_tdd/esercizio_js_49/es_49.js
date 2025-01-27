export const map_arr = (l, n) => {
    const result = [];
    for (let element of l) {
        if (element % n !== 0) {
            result.push(element);
        } else {
            result.push(0);
        }
    }
    return result;
};
