export const only_upper = (str) => {
    const upperLetters = str.match(/[A-Z]/g);
    if (!upperLetters) {
        return [];
    }
    return upperLetters;
};