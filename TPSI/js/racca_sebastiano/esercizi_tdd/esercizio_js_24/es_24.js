/** @param {string} email */
export const protect_email = (email) => {
    let [username, domain] = email.split('@');
    username = username.substring(0, username.length / 2);
    return `${username}...@${domain}`;
};