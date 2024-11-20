export const protect_email = (email) => {
    let [username, domain] = email.split("@");
    let visiblePart = username.split(".")[0];
    return `${visiblePart} ... @${domain}`;
};