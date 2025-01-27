export const shuffle = (arr, pos) => {
    if (pos < 0) {
        pos = arr.length + pos;
    }
    
    const first = arr.slice(0, pos);
    const second = arr.slice(pos);
    
    return [...second, ...first];
};