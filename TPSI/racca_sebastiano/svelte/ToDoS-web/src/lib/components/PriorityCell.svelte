<script lang="ts">
	import type { Priority } from "$lib/types/Item";
	import Cell from "./Cell.svelte";

    export let priority: Priority;

	const priorities = [''];
</script>

<Cell>{priority}</Cell>