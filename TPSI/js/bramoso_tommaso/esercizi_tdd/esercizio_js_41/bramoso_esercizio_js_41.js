export const new_arr = (n, e) => {
    n = Number(n);
    if (isNaN(n) || n <= 0) {
        return [];
    }
    return Array(n).fill(e);
};