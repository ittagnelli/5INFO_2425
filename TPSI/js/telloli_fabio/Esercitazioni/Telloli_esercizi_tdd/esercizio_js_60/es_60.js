export function is_anagram(arr) {
    const set = new Set()
    let newArr = []

    for (let i = arr.length - 1; i >= 0; i--) {
        const l = arr[i].split('').sort().join('')
        if (!set.has(l)) {
            set.add(l)
            newArr.unshift(arr[i])
        }
    }

    return newArr
}