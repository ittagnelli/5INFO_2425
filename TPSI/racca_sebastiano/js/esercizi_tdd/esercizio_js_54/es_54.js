/** @param {number} len */
export const gen_arr = (len) => {
    const a = Array.from({ length: len }, () => Math.floor(Math.random()));
    return [a, a.reverse()];
};