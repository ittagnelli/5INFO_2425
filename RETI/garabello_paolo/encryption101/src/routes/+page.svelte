<script>
    import Cesare from "$lib/components/Cesare.svelte";
    import Matrix from "$lib/components/Matrix.svelte";
    import Vigenere from "$lib/components/Vigenere.svelte";

    let input = "", output = "";
    /** @type {Array<Function>}*/
    let enc = [];
    let crypt = function () { 
        let out = input;
        enc.forEach((func) => {
            out = func(out);
        })
        output = out;
    }

    /**
     * @param {boolean} check
     * @param {Function} func
     */
    function update (check, func) {
        if (check) 
            enc.push(func);
        else {
            enc.splice(enc.indexOf(func), 1);
        }
    }
    
</script>

<section>
    <h1>Encryption 101</h1>
    <article>
        <textarea bind:value={input} name="input"></textarea>
        <button on:click={crypt}>cripta</button>
        <textarea bind:value={output} name="output" readonly></textarea>
    </article>
    <article>
        <div class="sost">
            <Cesare {update}></Cesare>
            <Vigenere {update}></Vigenere>
            <Matrix {update}></Matrix>
        </div>
    </article>
</section>


<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: larger;
        min-width: 80vw;
        min-height: 40vw;
    }
    article {
        display: flex;
        flex-direction: row;
        min-width: 50%;
        justify-content: center;
    }
    textarea {
        width: 20vw;
        height: 6vw;
    }
    .sost {
        display: flex;
        flex-direction: row;
    }
</style>