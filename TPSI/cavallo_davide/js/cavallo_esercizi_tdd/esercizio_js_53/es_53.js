export const shuffle = (l, m) => {

    const shift = m < 0 ? l.length + m : m;

    return [...l.slice(shift), ...l.slice(0, shift)];
};
