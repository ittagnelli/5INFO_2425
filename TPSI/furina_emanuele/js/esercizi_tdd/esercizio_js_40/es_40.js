export const same = (l1, l2) => {
    return l1.length === l2.length && l1.every((v, i) => v === l2[i]);
};