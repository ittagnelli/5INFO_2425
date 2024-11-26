export const tronca = (s, n) => {
    if (s.length > 0) {
        return s.slice(0, n) + "...";
    } else {
        return "...";
    } 
};