const full_alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!£$%&/()=?^@,.-;:_òàùèì()[]{}<>|";

function crypt([N, key], text) {
    const sub_alphabet = full_alphabet.substring(0, N);
    return text.split("").map(letter => {
        return sub_alphabet[(BigInt(sub_alphabet.indexOf(letter)) ** BigInt(key) % BigInt(N))];
    }).join("");
}

function rsa() {
    if(process.argv.length != 7) {
        console.log("<N> <Npriv> <Npub> <C|D> <plain|chyper>");
        process.exit(1);
    }

    const [,,N, Npriv, Npub, op, text] = process.argv;
    console.log(crypt([N, (op == "C" ? Npub : (op == "D" ? Npriv : process.exit(1)))], text));
}

rsa();