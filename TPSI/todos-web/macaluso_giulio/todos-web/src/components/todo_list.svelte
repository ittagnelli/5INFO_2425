<script>
    import Icon from "./icon.svelte";

</script>
<h1>ToDos</h1>

<div class="todo-list">
    <div class="header"><Icon /></div>
    <div class="header"><Icon /></div>
    <div class="header"><Icon /></div>
    <div class="header"><Icon /></div>
    <div class="header"><Icon /></div>

    <div>cella 1</div>
    <div>cella 2</div>
    <div>cella 3</div>
    <div>cella 4</div>
    <div>cella 5</div>

    <div>cella 1</div>
    <div>cella 2</div>
    <div>cella 3</div>
    <div>cella 4</div>
    <div>cella 5</div>

    <div>cella 1</div>
    <div>cella 2</div>
    <div>cella 3</div>
    <div>cella 4</div>
    <div>cella 5</div>
</div>

<style>
    .todo-list {
        display: grid;
        grid-template-columns: 1fr 1fr 4fr 2fr 1fr;
        border: 3px solid blue;
        width: 95%;
        height: 80%;
        margin: auto;
    }
</style>