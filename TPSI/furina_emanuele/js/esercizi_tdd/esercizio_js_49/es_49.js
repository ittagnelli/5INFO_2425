export const map_arr = (arr, interval) => {
    return arr.map((value, index) => {return (index + 1) % interval === 0 ? 0 : value;});
};