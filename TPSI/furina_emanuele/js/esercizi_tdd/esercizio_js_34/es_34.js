export const insert = (str1, agg, pos) => {
    if (pos <= 0) {
        return agg + " " + str1;
    } else if (pos >= str1.length) {
        return str1 + " " + agg;
    } else {
        return str1.slice(0, pos).trimEnd() + " " + agg + " " + str1.slice(pos).trimStart();
    }
};