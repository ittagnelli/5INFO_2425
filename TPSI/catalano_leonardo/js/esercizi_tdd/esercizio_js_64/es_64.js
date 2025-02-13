export const count_vocals = (str) => {
  let map = new Map();
  for (const el of str.toLowerCase().split("")) if (el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u') map.set(el, (map.get(el) || 0) + 1);
  return map;
}


