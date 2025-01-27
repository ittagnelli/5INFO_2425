export const protect_email = (email) => {
    const [username, domain] = email.split('@');
    if (username.length <= 3) {
        return '...@' + domain;
    }
    const parteVisibile = username.slice(0, Math.min(4, username.length));
    return `${parteVisibile}...@${domain}`;
};
