export const without = (l, n) => {
    let newArr = [];

    for (let i = 0; i < l.length; i++) {
        if (l[i] !== n) {
            newArr.push(l[i]);
        }
    }

    return newArr;
};