<svelte:head>
    <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        rel="stylesheet"
        />
</svelte:head>
<script>
    export let handler = () => {};
    export let name;
</script>

<button class="material-icons-outlined icon" onclick="{handler}">
     {name}
</button>

<style>
    .icon {
        font-size: 32px;
    }
    .icon:hover {
        cursor: pointer;
    }
    button {
        background: none;
        border: none;
    }
</style>