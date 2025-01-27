/** @param {string} s */
export const only_upper = (s) => {
  return s.split("").filter((char) => char >= "A" && char <= "Z");
};
