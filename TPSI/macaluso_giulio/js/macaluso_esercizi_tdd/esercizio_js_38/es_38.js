export const reverse = (arr) => {
    let array = Array(arr.length);
    let i = arr.length - 1;

    arr.forEach(element => {
        array[i] = element;
        i--;
    });
    return array;
};