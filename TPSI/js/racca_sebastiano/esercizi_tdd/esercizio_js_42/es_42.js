/** @param {any[]} l @param {number} n @param {number} m */
export const swap = (l, n, m) => {
  n = n < 0 ? l.length + n : n;
  m = m < 0 ? l.length + m : m;

  const [element] = l.splice(n, 1);
  l.splice(m, 0, element);
  return l;
};
