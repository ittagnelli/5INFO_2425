export const shuffle = (l, m) => {
    const len = l.length;
    m = m % len;
    if (m < 0) {
    }
    return l.slice(-m).concat(l.slice(0, -m));
};
