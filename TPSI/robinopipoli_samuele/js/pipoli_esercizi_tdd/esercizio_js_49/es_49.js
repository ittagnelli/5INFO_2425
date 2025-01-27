export const map_arr = (l, n) => {
    return l.map(num => (num % n === 0 ? 0 : num));
};
