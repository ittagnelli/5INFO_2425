export const swap = (l, n, m) => {
    let value;
    
    if (n < 0) {
        n = l.length + n;
    }
    if (m < 0) {
        m = l.length + m;
    }
    value = l.at(n);
    l.splice(n, 1);
    l.splice(m, 0, value);
    return l;
};