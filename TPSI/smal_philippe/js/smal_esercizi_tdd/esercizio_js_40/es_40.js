export const same = (l1, l2) => {
    return (l1.length != l2.length) ? false : l1.every((value, index) => value == l2[index])
};