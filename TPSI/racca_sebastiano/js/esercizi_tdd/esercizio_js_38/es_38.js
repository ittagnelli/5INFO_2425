/** @param {any[]} arr */
export const reverse = (arr) => {
  let output = [];

  arr.forEach((_, index) => {
    output.push(arr[arr.length - index - 1]);
  });

  return output;
};
