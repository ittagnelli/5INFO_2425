export const gen_arr = (len) => {
    let newArray = new Array(len)
    for (let index = 0; index < newArray.length; index++) newArray[index] = Math.floor(Math.random() * 10)
    return [newArray, newArray.slice().reverse()]
};