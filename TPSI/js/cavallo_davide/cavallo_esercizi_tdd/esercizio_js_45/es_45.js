export const only_upper = (s) => {
    const upperLetters = s.match(/[A-Z]/g);
    if (!upperLetters) return '';
    return upperLetters.join(',');
};
