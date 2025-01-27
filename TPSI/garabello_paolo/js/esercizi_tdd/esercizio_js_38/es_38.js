/**
 * @param {Array} arr 
 */
export const reverse = (arr) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++)
        newArr[i] = arr[arr.length-1-i];
    return newArr;
};