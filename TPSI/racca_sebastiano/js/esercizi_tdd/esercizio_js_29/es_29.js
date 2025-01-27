/** @param {string} str */
export const invert_case = (str) => {
  return str
    .split("")
    .map((char) => {
        if (char === char.toUpperCase()) return char.toLowerCase();

      return char.toUpperCase();
    })
    .join("");
};
