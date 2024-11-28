export const no_copies = (array) => {
    const seen = new Set();
    return array.filter(item => {
        if (!seen.has(item)) {
            seen.add(item);
            return true;
        }
        return false;
    });
};
