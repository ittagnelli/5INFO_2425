export const insert = (str1, agg, pos) => {
    return str1.slice(0, pos).trim() + " " + agg.trim() + " " + str1.slice(pos).trim()
};
