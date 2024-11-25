/**@param {string} email */
export const protect_email = (email) => {
    let user = email.slice(0, email.indexOf("@"));
    user = user.slice(0, Math.floor(user.length/2));
    return user + "..." + email.slice(email.indexOf("@"));
};
