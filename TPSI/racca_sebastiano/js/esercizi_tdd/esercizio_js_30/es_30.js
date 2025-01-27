/** @param {string} ph @param {number} l */
export const tronca = (ph, l) => {
    return ph.substring(0, l) + (ph.length > l ? "..." : "");
};