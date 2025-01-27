<script>
    /**@type {Function}*/
    export let update;

    /**@type {string}*/
    let step;
    /**@param {string} text*/
    const vigenere = ( text ) => {
        let key = step.split(" ");
        let count = 0;
        let out  = "";
        text.split(" ").forEach((word) => {
            word.split("").forEach((letter) => {
                out += String.fromCharCode(97 + ((letter.charCodeAt(0) + parseInt(key[count]) - 97) % 26));
                count = (count + 1) % key.length;
                console.log(parseInt(key[count]));
            })
            out += " ";
        })
        return out;
    }
    /**@type {boolean}*/
    let check;

</script>

<article>
    <div>
        <label for="vigenere">vigenere</label>
        <input type="checkbox" id="vigenere" bind:checked={check} on:change={() => update(check, vigenere)}>
    </div>
    <div>
        <label for="Vigenerestep">Passi</label>
        <input type="string" id="Vigenerestep" bind:value={step}>
    </div>
</article>


<style>
    article {
        display: flex;
        flex-direction: column;
    }
    div {
        display: flex;
        flex-direction: row;
    }
    input {
        margin-left: 2%;
        width: 40%;
    }
</style>