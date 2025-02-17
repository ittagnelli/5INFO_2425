<script>
    import Icon from "./icon.svelte";
    import Priority from "./priority.svelte";
    import TodoItem from "./todo_item.svelte";
    import { onMount } from "svelte";

    let todos = []
    let last_id = 0;

    const create_todo = async () => {
        let todo = {
            id: ++last_id,
            task: '',
            done: false,
            priority: 3
        }
        console.log("CREATE: ", todo);
        localStorage.setItem('todo${todo.id}', JSON.stringify(todo));
        todos = [...todos, todo]
    }
    const change_todo_item = async (e) => {
        delete_item(e.detail.id);
    }

    const delete_item = (id) => {
        console.log("DELETE", id);
        todos = todos.filter(t => t.id != id);
    }

    onMount(async () => {
        for(let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i);
            const todo = JSON.parse(localStorage.getItem(key));
            if (todo != NULL)
                todos.push(todo);
        }
        todos = [...todos];
    });

</script>

<h1 class="app-title">Todos</h1>
<div class="todo-list">
    <div class="header"><Icon nome="tag"/></div>
    <div class="header"><Icon nome="task_alt"/></div>
    <div class="header"><Icon nome="list"/></div>
    <div class="header"><Icon nome="schedule"/></div>
    <div class="header header-last"><Icon nome="add_box" handler={create_todo}/></div>

    {#each todos as todo}
        <TodoItem todo={todo} on:change={change_todo_item}/>
    {/each} 

</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
    .app-title{
    font-family: "Plus Jakarta Sans", serif;
    font-optical-sizing: auto;
    font-weight: 200px;
    font-style: normal;
        margin-top: 8px;
        font-size: 60px;
    }
    .todo-list {
        border: 0px solid blue;
        width: 95%;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
    }
    .header {
        border-bottom: 1px solid #E7ECEE;
        border-right: 1px solid #E7ECEE;
        text-align: center;
        padding-bottom: 20px;
    }
    .header-last{
        border-right: none;
    }
</style>