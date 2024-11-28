export const no_copies = (array) => {
    let newArr1 = new Set(array)
    let newArr2 = Array.from(newArr1)

    return newArr2
};