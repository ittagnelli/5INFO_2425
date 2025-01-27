export const shuffle = (l, m) => {
    let prima = l.slice(0, m);
    let dopo = l.slice(m + 1, l.length);

    return dopo.concat(prima);
};