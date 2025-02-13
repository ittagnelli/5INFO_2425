export const swap = (l, n, m) => {
    if (n < 0 || m < 0 || n >= l.length || m >= l.length) {
        return "Indici non validi";
    }
    const element = l[n];

    l.splice(n, 1);

    l.splice(m, 0, element);

    return l;
};
