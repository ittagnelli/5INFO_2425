export const gen_arr = (len) => {
    const randomArray = Array.from({ length: len }, () => Math.floor(Math.random() * 100) + 1);
    const reversedArray = [...randomArray].reverse();
    return [randomArray, reversedArray];
};
