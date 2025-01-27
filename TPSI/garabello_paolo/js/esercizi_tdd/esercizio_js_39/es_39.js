export const reverse = (arr) => {
    let output = [];
    let somma = 0;
    arr.forEach((_, index) => {
      somma += arr[arr.length - index - 1];
      output.push(arr[arr.length - index - 1]);
    });
    output.unshift(somma)
    return output;
};