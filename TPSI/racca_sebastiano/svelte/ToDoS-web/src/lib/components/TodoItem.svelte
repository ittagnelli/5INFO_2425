<script lang="ts">
	import type { Item } from "$lib/types/Item";
    import Cell from "./Cell.svelte";
    import Icon from "./Icon.svelte";
	import PriorityCell from "./PriorityCell.svelte";

    export let item: Item;
</script>

<Cell>{item.id}</Cell>
<Cell><Icon name="circle" /></Cell>
<Cell>{item.description}</Cell>
<PriorityCell priority={item.priority} />
<Cell><Icon name="delete_forever" /></Cell>
