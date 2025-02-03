<script>
    import { createEventDispatcher } from "svelte";
    import Cell from "./Cell.svelte";
    import Icon from "./Icon.svelte";
    import Priority from "./Priority.svelte";
    export let todo;

    const toggleStatus = () => {
        todo.done = !todo.done
    }

    const editTask = () => {
        document.getElementById(todo.id).blur();
    }

    const dispatch = createEventDispatcher();

    const item_change = (type) => {
        dispatch ('change', {type:type, id: todo.id});
    }
</script>

<Cell>
    {todo.id}
</Cell>
<Cell>
    {#if !todo.done}
        <Icon name="circle" handler={toggleStatus} color="red"/>
    {:else}    
        <Icon name="task_alt" handler={toggleStatus}/>
    {/if}
</Cell>
<Cell>
    <input
        type="text"
        class="todo-item-input-text {todo.done ? 'text-done' : ''}"
        id="{todo.id}"
        placeholder="Inserisci il nuovo ToDO"
        bind:value={todo.task}
        on:change={editTask}>
</Cell>
<Cell>
    <Priority disabled={todo.done}/>
</Cell>
<Cell last>
    <Icon name="delete_forever" handler={() => item_change('delete')} color="red"/>
</Cell>

<style>
    .todo-item-input-text {
        border: none;
        width: 90%;
        height: 30px;
        font-size: 20px;
        color: #525252;
    }
    .todo-item-input-text:focus  {
        background-color: rgb(204, 229, 253);
        color: black;
        padding: 4px;
        padding-left: 10px;
    }
    .text-done {
        text-decoration: line-through;
        opacity: 0.3;
    }
</style>