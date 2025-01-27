export const gen_arr = (len) => {
    let array = new Array(len);

    for (let index = 0; index < array.length; index++) {
        array[index] = Math.floor(Math.random() * 10)
    }
    
    return [array, array.slice().reverse()]
};