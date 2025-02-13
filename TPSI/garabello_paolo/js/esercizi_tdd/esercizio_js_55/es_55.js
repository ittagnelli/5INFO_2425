/**
 * @param {Array} array 
 */
export const no_copies = (array) => {
    return array.filter((i, index) => array.indexOf(i) == index);
};