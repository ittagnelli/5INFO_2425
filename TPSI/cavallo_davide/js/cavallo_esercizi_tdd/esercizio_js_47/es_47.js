export const sub_arr = (l, n) => {
    if (n < 0) return [];

    if (n > l.length) return l;
    return l.slice(0, n);
};
