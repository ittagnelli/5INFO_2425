<script lang="ts">
    export let name: string;
    export let clickable: boolean = true;
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined">
</svelte:head>

<span class="material-icons-outlined" class:clickable>
    {name}
</span>

<style lang="scss">
    span {
        font-size: 32px;
    }

    .clickable {
        cursor: pointer;
    }
</style>
