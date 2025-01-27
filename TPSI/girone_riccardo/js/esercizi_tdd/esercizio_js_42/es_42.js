export const swap = (l, n, m) => {
    if (n < 0) n += l.length;
    if (m < 0) m += l.length;

    const elemento = l.splice(n, 1)[0];

    l.splice(m, 0, elemento);

    return l;
};