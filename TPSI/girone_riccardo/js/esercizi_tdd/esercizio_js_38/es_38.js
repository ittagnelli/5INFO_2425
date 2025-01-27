export const reverse = (arr) => {
    let reverseArray = []

    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArray.push(arr[i])
    }

    return reverseArray
};