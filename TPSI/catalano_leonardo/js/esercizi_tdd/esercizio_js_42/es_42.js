export const swap = (l, n, m) => {
    if (n < 0) n = l.length + n; 
    if (m < 0) m = l.length + m;

    const [element] = l.splice(n, 1);
  l.splice(m, 0, element);

    return l; 
};
