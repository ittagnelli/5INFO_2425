/** @param {string} s @param {number} pos */
export const tronca_parola = (s, pos) => {
  const parole = s.split(" ");
  return parole.splice(0, pos >= 0 ? pos : parole.length + pos).join(" ");
};
