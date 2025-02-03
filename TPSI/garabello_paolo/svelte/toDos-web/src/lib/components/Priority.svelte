<script>
    export let priority = 3;
    export let disabled = false;

    const prio2str = (priority) => {
        let map = {
            3: 'ALTA',
            2: 'MEDIA',
            1: 'BASSA'
        }
        return map[priority];
    }

    const changePrio = () => {
        if(!disabled)
            priority = ((priority + 1) % 3) + 1
    }
</script>

<button class="{disabled ? 'DISABILITATP' : prio2str(priority)}" onclick="{changePrio}">
    {prio2str(priority)}
</button>

<style>
    button {
        display: inline-block;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        width: 100px;
        height: 30px;
    }

    button:hover {
        cursor: pointer;
    }

    .ALTA {
        background-color: red;
    }

    .MEDIA {
        background-color: orange;
    }

    .BASSA {
        background-color: green;
    }
    .DISABILITATO {
        background-color: grey;
    }
</style>