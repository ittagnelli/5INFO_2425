<script>
    import Icon from "./Icon.svelte";
    import ToDoItem from "./ToDo-Item.svelte";
</script>

<h1>Todos</h1>
<div class="todo-list">
    <div class="header"><Icon name="tag"/></div>
    <div class="header"><Icon name="task_alt"/></div>
    <div class="header"><Icon name="list"/></div>
    <div class="header"><Icon name="schedule"/></div>
    <div class="header"><Icon name="add_box"/></div>
    <ToDoItem todo={{id:1,task:"task",done:false,priority:1}}/>  
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