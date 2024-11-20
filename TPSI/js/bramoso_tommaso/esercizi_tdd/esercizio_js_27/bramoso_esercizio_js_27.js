export const capitalize_all = (str) => {
    return str
        .split(" ")
        .map(word => {
            if (word.length === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
};