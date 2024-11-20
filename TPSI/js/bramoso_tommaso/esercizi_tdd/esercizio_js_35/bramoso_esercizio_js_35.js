export const tronca = (str, N) => {
    if (N <= 0) {
        return "...";
    }
    if (str.length > N) {
        return str.slice(0, N) + "...";
    }
    return str;
};