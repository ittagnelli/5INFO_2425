/*export const reverse = (arr) => {
    let array = Array(arr.length);
    let i = arr.length - 1;
    let sum = 0;

    arr.forEach(element => {
        array[i] = element;
        sum += element;
        i--;
    });
    array.unshift(sum);
    return array;
};*/
export const reverse = (arr) => {
    let array = Array(arr.length);
    let i = arr.length - 1;

    arr.forEach(element => {
        array[i] = element;
        i--;
    });
    return array;
};