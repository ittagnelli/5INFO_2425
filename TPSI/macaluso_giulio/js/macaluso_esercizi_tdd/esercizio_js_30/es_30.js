export const tronca = (ph, l) => {
    return (ph.length > l) ? ph.slice(0, l) + "..." : ph;
};