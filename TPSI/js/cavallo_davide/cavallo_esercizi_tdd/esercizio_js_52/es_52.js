export const psw_gen = (len) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = [];
    
    for (let i = 0; i < len; i++) {
        const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
        password.push(randomChar);
    }

    return password;
};
