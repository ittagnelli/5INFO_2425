<script>
    import TodoList from "../components/todo_list.svelte";
</script>

<main>
    <TodoList />
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    
    :global(*) {
        font-family: "Press Start 2P", serif;
    }

    main { 
        width: 90%;
        height: 90vh;
        margin: auto;
    }
</style>