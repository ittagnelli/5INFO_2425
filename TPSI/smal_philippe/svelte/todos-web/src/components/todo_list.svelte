<script>
    import Icon from "./icon.svelte";
    import TodoItem from "./todo_item.svelte";
</script>

<h1>Todos</h1>
<div class="todo-list">
    <div class="header"><Icon nome="tag"/></div>
    <div class="header"><Icon nome="task_alt"/></div>
    <div class="header"><Icon nome="list"/></div>
    <div class="header"><Icon nome="schedule"/></div>
    <div class="header"><Icon nome="add_box"/></div>

    <TodoItem />

    <TodoItem />

    <TodoItem />
</div>

<style>
    .todo-list {
        border: 3px solid blue;
        width: 95%;
        height: 80%;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
    }
</style>