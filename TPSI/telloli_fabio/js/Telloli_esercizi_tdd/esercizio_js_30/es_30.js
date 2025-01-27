export const tronca = (ph, l) => {
    if (ph.length > l) {
        return ph.slice(0, l) + '...';
    }

    return ph;
};