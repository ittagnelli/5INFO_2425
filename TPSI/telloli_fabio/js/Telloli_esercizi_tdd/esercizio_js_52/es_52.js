export const psw_gen = (len) => {
    let arrChar = []
    let caratteri = 'abcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < len; i++) {
        arrChar[i] = caratteri.charAt(Math.floor(Math.random() * caratteri.length))
    }

    return arrChar
};