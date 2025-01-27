export const no_copies = (array) => {
    return array.filter((element, index) => array.indexOf(element) === index);
}
