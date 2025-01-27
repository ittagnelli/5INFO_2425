const isLetter = (char) => /[a-zA-Z]/.test(char);

const cifrario_cesare = (text, shift, decode = false) => {
  if (decode) shift = -shift;

  return text
    .split("")
    .map((char) => {
      if (!isLetter(char)) return char;

      const ascii = char.charCodeAt(0);
      const base =
        ascii >= "A".charCodeAt(0) && ascii <= "Z".charCodeAt(0)
          ? "A".charCodeAt(0)
          : "a".charCodeAt(0);
      return String.fromCharCode(((ascii - base + shift) % 26) + base);
    })
    .join("");
};

const cifrario_vigenere = (text, key, decode = false) => {
  let index = 0;

  return text
    .split("")
    .map((char) => {
      if (!isLetter(char)) return char;

      const isUpperCase = char === char.toUpperCase();
      const base = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
      const textCharCode = char.charCodeAt(0) - base;
      const keyCharCode =
        key[index % key.length].charCodeAt(0) - "A".charCodeAt(0);

      const shift = decode
        ? (textCharCode - keyCharCode + 26) % 26
        : (textCharCode + keyCharCode) % 26;

      index++;

      return String.fromCharCode(shift + base);
    })
    .join("");
};

const random_key = (length) => {
  return Array.from({ length }, () =>
    String.fromCharCode(Math.floor(Math.random() * 256))
  ).join("");
};

const cifrario_otp = (text, key, decode = false) => {
  return text
    .split("")
    .map((char, index) => {
      const charCode = char.charCodeAt(0);
      const keyCode = key.charCodeAt(index);

      const newCharCode = decode
        ? (charCode - keyCode + 256) % 256
        : (charCode + keyCode) % 256;

      return String.fromCharCode(newCharCode);
    })
    .join("");
};

const text = "Hello World";
let encr;
let decr;
let key;

console.log(`Text: ${text}\n\n`);

key = 2;
encr = cifrario_cesare(text, key);
console.log(
  `Cesare:\nEncrypted: ${encr}\nDecrypted:${cifrario_cesare(
    encr,
    key,
    true
  )}\nKey: ${key}\n`
);

key = "CIFRARIO";
encr = cifrario_vigenere(text, key);
console.log(
  `Vigenere:\nEncrypted: ${encr}\nDecrypted:${cifrario_vigenere(
    encr,
    key,
    true
  )}\nKey: ${key}\n`
);

key = random_key(text.length);
encr = cifrario_otp(text, key);
console.log(
  `OTP:\nEncrypted: ${encr}\nDecrypted:${cifrario_otp(
    encr,
    key,
    true
  )}\nKey: ${key}\n`
);
