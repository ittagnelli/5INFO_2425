/** @param {string} str1 @param {string} agg @param {number} pos */
export const insert = (str1, agg, pos) => {
    const prima = str1.substring(0, pos);
    const dopo = str1.substring(pos);

    return prima + (!prima.endsWith(" ") ? " " : "") +
        agg +
        (!dopo.startsWith(" ") ? " " : "") + dopo;
};
