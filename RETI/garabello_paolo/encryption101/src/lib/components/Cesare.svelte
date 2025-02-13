<script>
    /**@type {Function}*/
    export let update;

    /**@type {number}*/
    let step = 0;
    /**@param {string} text*/
    const cesare = ( text ) => {
        let out  = "";
        text.split(" ").forEach((word) => {
            word.split("").forEach((letter) => {
                out += String.fromCharCode(97 + ((letter.charCodeAt(0) + step - 97) % 26));
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
        <label for="cesare">Cesare</label>
        <input type="checkbox" id="cesare" bind:checked={check} on:change={() => update(check, cesare)}>
    </div>
    <div>
        <label for="step">Passo</label>
        <input type="number" id="step" bind:value={step}>
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
        width: 20%;
    }
</style>