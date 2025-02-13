export const gen_arr = (len) => {
    if (typeof len !== 'number' || len <= 0 || !Number.isInteger(len)) {
        throw new Error("Input must be a positive integer.");
    }
    const arr = Array.from({ length: len }, () => Math.floor(Math.random() * 10) + 1);
    const reversedArr = [...arr].reverse();
    console.log("Array originale:", arr);
    console.log("Array invertito:", reversedArr);
    return [arr, reversedArr];
};