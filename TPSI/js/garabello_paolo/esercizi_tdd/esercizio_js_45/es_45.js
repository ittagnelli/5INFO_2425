/**
 * @param {string} s 
 */
export const only_upper = (s) => {
    return s.split("").filter(item => {
        if(!parseInt(item) && item.toLowerCase().charCodeAt(0) >= 97 && item.toLowerCase().charCodeAt(0) <= 122)
            return item == item.toUpperCase();
    })
};