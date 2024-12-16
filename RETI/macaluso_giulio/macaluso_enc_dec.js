let full_alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!£$%&/()=?^@,.-;:_òàùèì()[]{}<>|";

function calcola(m, N, Npub) {
    return (BigInt(m) ** BigInt(Npub)) % BigInt(N);
}

function cifra(msg, N, Npub) {
    let messaggio = "";

    msg.split("").forEach(element => {
        messaggio += full_alphabet.charAt(parseInt(calcola(full_alphabet.indexOf(element), N, Npub)));
    });

    return messaggio.trim();
}

function decifra(m, N, NPriv) {
    let messaggio = "";

    m.split("").forEach(element => {
        messaggio += full_alphabet.charAt(parseInt(calcola(full_alphabet.indexOf(element), N, NPriv)));
    });

    return messaggio.trim();
}

function main(m, N, Npub, NPriv, flag) {
    let newMsg = ""

    if (flag == "c") newMsg = cifra(m, N, Npub);
    else if (flag == "d") newMsg = decifra(m, N, NPriv);

    console.log(newMsg)
}

main(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6]);
