export const protect_email = (email) => {
    let array = email.split("@");
    return array[0].slice(0, array[0].length / 2) + "..." + "@" + array[1]
};
