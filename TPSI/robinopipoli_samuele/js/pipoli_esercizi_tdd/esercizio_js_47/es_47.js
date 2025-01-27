export const sub_arr = (arr, n) => {
    if (n < 0) {
        return [];
    }
    return arr.slice(0, n);
};
