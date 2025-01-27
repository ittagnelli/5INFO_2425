/** @param {any[]} l1 @param {any[]} l2 */
export const same = (l1, l2) => {
  if (l1.length != l2.length) return false;

  for (const [index, el] of l1.entries()) {
    if (el != l2[index]) return false;
  }

  return true;
};
