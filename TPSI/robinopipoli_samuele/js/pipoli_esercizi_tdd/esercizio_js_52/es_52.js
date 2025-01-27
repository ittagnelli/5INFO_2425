export const psw_gen = (len) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const password = [];

    for (let i = 0; i < len; i++) {
        const randomChar = chars[Math.floor(Math.random() * chars.length)];
        password.push(randomChar);
    }

    return password;
};
