<script>

    /**@type {Function}*/
    export let update;

    /**@type {string}*/
    let key = "";
    
    /**@param {string} text*/
    const matrix = ( text ) => {
        let out = "";
        if (!key) {key = " "};
        const mat = [[...key]];
        /**@type {Array<string>}*/
        let row = [];
        text.split("").forEach((letter) => {
            row.push(letter);
            if(row.length == key.length) {
                const t = row;
                mat.push(t);
                row = []
            }
        })
        for (let i = row.length; i < key.length; i++)
            row.push("*");
        const t = row;
        mat.push(t);
        mat.shift();

        let newKey = key.split("");
        for (let letter of key.split("").sort().join("")) {
            for (let row of mat) {
                out += row[newKey.indexOf(letter)];
                mat[mat.indexOf(row)].splice(newKey.indexOf(letter), 1);
            }
            newKey.splice((newKey.indexOf(letter)), 1);
        }

        return out;
    }
    /**@type {boolean}*/
    let check;

</script>
<article>
    <div>
        <label for="matrix">Matrice</label>
        <input type="checkbox" id="matrix" bind:checked={check} on:change={() => update(check, matrix)}>
    </div>
    <div>
        <label for="key">Chiave</label>
        <input type="text" id="key" bind:value={key}>
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
        width: 30%;
    }
</style>