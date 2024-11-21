export const tronca = (s, n) => {
    return (s.length > 0) ? s.slice(0, n) + "..." : "..." 
};
