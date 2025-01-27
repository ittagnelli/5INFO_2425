<script lang="ts">
	import type { Item } from "$lib/types/Item";
	import GridHeader from "./GridHeader.svelte";
	import TodoItem from "./TodoItem.svelte";

    export let todo: Item[];
</script>

<div class="grid">
    <GridHeader />

    {#each todo as item}
        <TodoItem {item} />
    {/each}
</div>

<style lang="scss">
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
        width: 95%;
    }
</style>
