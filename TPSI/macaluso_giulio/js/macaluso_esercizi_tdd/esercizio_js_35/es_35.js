export const tronca = (s, n) => {
    return (s.length > n) ? s.slice(0, n) + "..." : s;
};
