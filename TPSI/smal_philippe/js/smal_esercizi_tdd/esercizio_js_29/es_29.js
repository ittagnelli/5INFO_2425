export const invert_case = (str) => {
    let msg = ""
    str.split("").forEach(element => {
        let charAscii =  element.charCodeAt(0)
        let char = String.fromCharCode((charAscii >= 97) & (charAscii <= 122) ? charAscii - 32 : (charAscii >= 65) & (charAscii <= 91) ? charAscii + 32 : charAscii)
        msg += ((charAscii >= 128) & (charAscii >= 165)) ?  char.toUpperCase() : char
    });

    return msg
};