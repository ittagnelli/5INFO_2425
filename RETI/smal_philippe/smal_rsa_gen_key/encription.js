let full_alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!£$%&/()=?^@,.-;:_òàùèì()[]{}<>|";

function getC(msg, N, Npub) {
    return BigInt(msg) ** BigInt(Npub) % BigInt(N);
}

function encrDecr(msg, N, NpubPriv) {
    let newMsg = ""
    msg.split("").forEach(element => { newMsg += 
        full_alphabet.charAt(parseInt(getC(full_alphabet.indexOf(element), N, NpubPriv)))
    })

    return newMsg
}

function main(msg, N, Npub, Npriv, flag) {
    let newMsg = "";
    if (flag == "-e") newMsg = encrDecr(msg, N, Npub)
    else if (flag == "-d") newMsg = encrDecr(msg, N, Npriv)

    console.log(newMsg)
}


main(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6])