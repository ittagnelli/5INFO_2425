export const order = (l) => {

    const odd = l.filter(num => num % 2 !== 0);
    const even = l.filter(num => num % 2 === 0);

    return [...odd, ...even];
};
