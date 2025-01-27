/** @param {number} len */
export const psw_gen = (len) => {
  return Array.from({ length: len }, () => "abcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(Math.random() * 36)]);
};
