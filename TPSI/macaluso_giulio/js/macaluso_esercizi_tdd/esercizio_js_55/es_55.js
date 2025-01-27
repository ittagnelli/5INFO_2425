export const no_copies = (array) => {
    return array.filter((value, index) => array.indexOf(value) == index)
};