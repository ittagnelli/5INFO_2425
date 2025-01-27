export const unique_random_numbers = (n, m) => {
    let array = [];
    for (let index = 0; index < array.length; index++) {
        array[index] = (Math.random() * m) + n;
    }
    return array.sort(); 
}
