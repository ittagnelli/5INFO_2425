/**
 * @param {number} len 
 */
export const gen_arr = (len) => {
    let arr = Array.from({length: len}, () => {
        Math.floor(Math.random());
    });
    return [arr, arr.reverse()];
};