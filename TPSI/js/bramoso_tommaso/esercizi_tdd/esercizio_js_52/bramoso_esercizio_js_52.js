export const psw_gen = (len) => {
    if (typeof len !== 'number' || len <= 0) {
        throw new Error("La lunghezza deve essere un numero positivo");
    }
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const result = Array.from({ length: len }, () => {
        return chars[Math.floor(Math.random() * chars.length)];
    });
    
    return result;
};