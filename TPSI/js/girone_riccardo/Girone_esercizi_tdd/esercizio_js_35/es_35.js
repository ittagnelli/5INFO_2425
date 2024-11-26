export const tronca = (s, n) => {
    if (n <= 0) {
        return "...";
    }
    
    return s.slice(0, n) + "..."
};
