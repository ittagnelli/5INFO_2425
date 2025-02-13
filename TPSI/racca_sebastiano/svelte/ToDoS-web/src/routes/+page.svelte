<script lang="ts">
	import TodoList from '$lib/components/TodoList.svelte';
	import type { Item } from '$lib/types/Item';

	const todo: Item[] = [
		{
			id: 0,
			done: false,
			description: 'Descrizione 1',
			priority: 0
		}
	];
</script>

<div>
	<h1>ToDos</h1>

	<TodoList {todo} />
</div>

<style lang="scss">
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>
