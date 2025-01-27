<svelte:head>
    <link rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined">
</svelte:head>

<script>
    export let nome
</script>

<span class="material-icons-outlined icon">
    {nome}
</span>

<style>
    .icon {
        font-size: 32px;
    }

    .icon:hover {
        cursor: pointer;
    }
</style>