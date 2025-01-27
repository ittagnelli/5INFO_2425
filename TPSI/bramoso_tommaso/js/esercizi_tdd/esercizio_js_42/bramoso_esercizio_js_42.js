export const swap = (l, n, m) => {
    n = n < 0 ? l.length + n : n;
    m = m < 0 ? l.length + m : m;
    if (n < 0 || n >= l.length || m < 0 || m >= l.length) {
        return l;
    }
    let temp = l[n];
    l.splice(n, 1);
    l.splice(m, 0, temp);
    return l;
};