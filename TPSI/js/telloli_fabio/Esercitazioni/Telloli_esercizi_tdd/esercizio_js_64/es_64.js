export const count_vocals = (str) => {
  let map = new Map();
  for (const element of str.toLowerCase().split("")) {
    if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u') {
      map.set(element, (map.get(element) || 0) + 1);
    } 
  } 
  return map;
};
