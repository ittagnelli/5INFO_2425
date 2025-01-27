const ALPHABET = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!£$%&/()=?^@,.-;:_òàùèì()[]{}<>|"

/**
 * 
 * @param {number[]} key
 * @param {string} text 
 */
export const crypt = ([N, key], text) => {
    const alphabet = ALPHABET.substring(0, N);
    return text.split('')
        .map(char => {
            let index = alphabet.indexOf(char);
            if (index === -1) throw new Error(`"${char}" non è nell'alfabeto`);
            let indx = (BigInt(index) ** BigInt(key)) % BigInt(N)
            // console.log(index, (index ** key) % N);
            return alphabet[indx];
        })
        .join('');
}
