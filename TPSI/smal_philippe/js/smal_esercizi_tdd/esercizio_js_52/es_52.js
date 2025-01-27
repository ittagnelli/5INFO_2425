export const psw_gen = (len) => {
    let newArray = new Array(len)
    for (let index = 0; index < len; index++) {
        newArray[index] = (Math.floor(Math.random() * 1) == 0) ? 
            String.fromCharCode((Math.floor(Math.random() * ((97 + 7) - 97)) + 97)) : 
            (Math.floor(Math.random() * 7))
    }
    
    return newArray
};