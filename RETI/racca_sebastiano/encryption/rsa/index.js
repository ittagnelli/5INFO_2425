import { crypt } from "./crypt.js";

/** @param {text[]} argv */
const main = (argv) => {
    if(argv.length != 5) {
        console.error("Sintassi d'uso: <N> <KEY> <TEXT>");
        console.error("Esempio:");
        console.error("Encrypt: node index.js 33 39 CIAO");
        console.error("Decrypt: node index.js 33 19 OaAC");
        process.exit(1);
    }

    const [,, N, key, text] = argv;
    console.log(crypt([N, key], text));
}

main(process.argv);
