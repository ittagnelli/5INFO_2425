export const reverse = (l) => {
    let reversedArray = [];
    for (let i = l.length - 1; i >= 0; i--) {
        reversedArray.push(l[i]);
    }
    return reversedArray;
};
