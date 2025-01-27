export const gen_arr = (len) => {
    const firstPart = Array.from({ length: len }, (_, i) => i + 1);
    const secondPart = [...firstPart].reverse();
    secondPart.pop();
    return [firstPart, secondPart];
};
