/** @param {string} str */
export const capitalize_all = (str) => {
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.substring(1, word.length);
    })
    .join(" ");
};
