export const psw_gen = (len) => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    const risultato = [];
    
    for (let i = 0; i < len; i++) {
      risultato.push(chars[Math.floor(Math.random() * chars.length)]);
    }
    
    return risultato;
};