export const swap = (l, n, m) => {
    if (n < 0) {
        n = l.length + n;
    }
    if (m < 0) {
        m = l.length + m;
    }

    return l.map((e, i) => {
        if (i === n) {
            return l[m];
        } else if (i === m) {
            return l[n];
        } else {
            return e;
        }
    });
};