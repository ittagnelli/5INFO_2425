export const gen_arr = (len) => {
    const arr1 = Array.from({length: len}, (_, i) => i + 1);
    const arr2 = [...arr1].reverse();
    return [arr1, arr2];
};