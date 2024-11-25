export const tronca = (s, n) => {
    return n <= 0 ? "..." : (s.length > n ? s.slice(0, n) + "..." : s);
};
