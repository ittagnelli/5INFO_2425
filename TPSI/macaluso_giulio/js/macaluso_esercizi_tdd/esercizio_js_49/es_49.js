export const map_arr = (l, n) => {
    l.forEach((element, index) => {
        (element % n == 0) ? l[index] = 0 : null;
    });
    return l;
};