export const sub_arr = (l, n) => {
    if (n < 0) {
        return []
    }
    
    return l.slice(0, n)
};