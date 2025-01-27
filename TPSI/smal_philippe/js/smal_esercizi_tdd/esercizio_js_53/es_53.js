export const shuffle = (l, m) => {
    return l.slice(m + 1, l.length).concat(l.slice(0, m));
};