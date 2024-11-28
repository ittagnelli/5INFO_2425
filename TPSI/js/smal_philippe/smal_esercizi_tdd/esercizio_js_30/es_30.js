export const tronca = (ph, l) => {
    return (l < ph.length) ?  ph.slice(0, l) + "..." : ph
};