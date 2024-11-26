export const map_arr = (l, n) => {
    let newArr = []

    for (let i = 0; i < l.length; i++) {
        if(l[i] % n === 0) {
            newArr.push(0)
        } else {
            newArr.push(l[i])
        }
    }

    return newArr
};