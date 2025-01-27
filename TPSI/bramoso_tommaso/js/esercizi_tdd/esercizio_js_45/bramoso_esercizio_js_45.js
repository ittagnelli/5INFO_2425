export const only_upper = (s) => {
    return s.split('').filter(char => char === char.toUpperCase() && /[A-Z]/.test(char));
};