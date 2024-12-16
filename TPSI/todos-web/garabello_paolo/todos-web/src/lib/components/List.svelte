<script>
	import Header from "./Header.svelte";
	import Icon from "./Icon.svelte";
	import ListItem from "./ListItem.svelte";
</script>
<h1>TODO</h1>
<div class="todo-list">

    <div class="header"><Icon name="tag"/></div>
    <div class="header"><Icon name="task_alt"/></div>
    <div class="header"><Icon name="list"/></div>
    <div class="header"><Icon name="schedule"/></div>
    <div class="header"><Icon name="add_box"/></div>
    
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
</div>

<style>
    .todo-list {
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
        border: 3px solid blue;
        width: 95%;
    }
</style>