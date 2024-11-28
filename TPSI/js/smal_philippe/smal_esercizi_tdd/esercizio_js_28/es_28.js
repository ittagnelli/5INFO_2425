export const upper_case = (str) => {
    let msg = ""
    str.split("").forEach(element => {
        let charAscii =  element.charCodeAt(0)
        msg += String.fromCharCode((charAscii >= 97) & (charAscii <= 122) ? charAscii - 32 : charAscii)
    });

    return msg
    
} 