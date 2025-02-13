<script lang="ts">
    import Cell from "./Cell.svelte";
	import Icon from "./Icon.svelte";

    const headerIcons: string[] = ["tag", "task_alt", "list", "schedule", "add_box"];
</script>

{#each headerIcons as icon }
    <Cell><Icon name={icon} clickable={false} /></Cell>
{/each}
