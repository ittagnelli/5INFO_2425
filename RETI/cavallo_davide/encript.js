let full_alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!£$%&/()=?^@,.-;:_òàùèì()[]{}<>|";

function get(msg, N, Npub){
    return BigInt(msg) ** BigInt(Npub) % BigInt(N);
}

function encription(msg, N, Npub){
    let messaggio = ""
    msg.split("").forEach(element => { messaggio += full_alphabet.charAt(parseInt(get(full_alphabet.indexOf(element), N, Npub)))});

    return messaggio.trim()
}

function decription (msg, N, Npriv){
    let messaggio = ""
    msg-split(" ").forEach(element => {
        messaggio += full_alphabet.charAt(parseInt(get(full_alphabet.indexOf(element), N, Npriv)))
    })

    return messaggio
}


function test(msg, N, Npub, Npriv, flag ){
    let messaggio = "";
    
    if(flag == "-e") messaggio = encription(msg, N, Npub)
    else if (flag == "-d") messaggio = decription (msg, N, Npriv)
    
    console.log(messaggio)
}

test(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6])