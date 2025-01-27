/** @param {string} str */
export const count_vocals = (str) => {
  const map = new Map();
  str.split('').filter(char => 'aeiou'.includes(char.toLowerCase())).forEach(char => {
    char = char.toLowerCase(); map.set(char, (map.get(char) || 0) + 1)
  });
  return map;
};
