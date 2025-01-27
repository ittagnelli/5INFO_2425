export const reverse = (l) => {
    const sum = l.reduce((acc, val) => acc + val, 0);
    let reversedArray = [];
    reversedArray.push(sum);
    for (let i = l.length - 1; i >= 0; i--) {
        reversedArray.push(l[i]);
    }

    return reversedArray;
};
