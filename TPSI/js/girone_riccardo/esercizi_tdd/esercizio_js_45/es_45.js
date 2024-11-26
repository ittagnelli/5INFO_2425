export const only_upper = (s) => {
    const newArr = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char >= 'A' && char <= 'Z') {
            newArr.push(char);
        }
    }

    return newArr;
};