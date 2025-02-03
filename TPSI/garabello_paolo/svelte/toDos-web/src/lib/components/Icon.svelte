<svelte:head>
    <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        rel="stylesheet"
        />
</svelte:head>
<script>
    export let handler = () => {};
    export let name;
    export let color  = "green";
</script>

<button class="material-icons-outlined icon" onclick="{handler}" style="--color:{color}">
    {name}
</button>

<style>
    .icon {
        font-size: 32px;
        color: var(--color);
    }
    .icon:hover {
        cursor: pointer;
    }
    button {
        background: none;
        border: none;
    }
</style>