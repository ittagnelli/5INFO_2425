export const protect_email = (email) => {
    let array = email.split ("@")
    let array2 = array[0].slice(0,array[0].length/2)+"...@"+array[1]

    return array2
}
