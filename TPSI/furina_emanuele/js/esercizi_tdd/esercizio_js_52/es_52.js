export const psw_gen = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from(
        { length }, 
        () => chars.charAt(Math.floor(Math.random() * chars.length))
    );
};