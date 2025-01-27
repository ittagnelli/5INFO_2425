export const shuffle = (l, m) => {
    let arr1 = []

    if (m < 0) {
        console.log(l);
        
        return l
    }

    for (let i = 0; i < m; i++) {
        arr1[i] = l[i]
    }

    return l.slice(m + 1, l.length) + "," + arr1
    
};