export const sub_arr = (arr, len) => {
    if (len <= 0) {return [];};return arr.slice(-len);
};