export const count_vocals = (str) => {
  let map = new Map();
  for (let index = 0; index < str.length; index++) {
    if (str[index] === 'a' || str[index] === 'e' || str[index] === 'i' || str[index] === 'o' || str[index] === 'u') {
      if (map.has(str[index])) {
        map.set(str[index], map.get(str[index]) + 1);
      } else {
        map.set(str[index], 1);
      }
    }
  }
  return map;
}


