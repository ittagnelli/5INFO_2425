export const gen_arr = (len) => {
    let arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }

    let reversedArr = arr.slice().reverse();
    return [arr, reversedArr]
};