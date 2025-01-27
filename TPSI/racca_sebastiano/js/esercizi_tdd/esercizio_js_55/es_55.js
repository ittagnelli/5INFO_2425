/** @param {any[]} array */
export const no_copies = (array) => {
    // return [...new Set(array)];
    return array.filter((i, index) => array.indexOf(i) == index);
};