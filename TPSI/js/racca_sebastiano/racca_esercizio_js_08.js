const ARROWS = ['&darr;', '&rarr;', '&uarr;'];

const getFormData = () => {
    const inputs = ['description', 'priority'];
    let data = {};

    inputs.forEach(input => {
        data[input] = document.getElementsByName(input)[0];
    })

    return data;
}

const clearFormData = () => {
    getFormData().description.value = "";
    getFormData().priority.value = 0;
};

const genRandomID = () => {
    return 'todo-list-' + Date.now();
}

const insertToDo = (e) => {
    e.preventDefault();
    const data = getFormData();

    const row = list.insertRow();
    row.id = genRandomID();

    const description = row.insertCell();
    description.innerText = data.description.value;

    const priority = row.insertCell();
    priority.innerHTML = ARROWS[data.priority.value];
    priority.classList.add(`priority-${data.priority.value}`);
    
    const done = row.insertCell();
    done.innerHTML = '&#10004;';
    done.classList.add('action', 'done-todo');
    done.dataset.rowId = row.id;
    done.addEventListener('click', doneToDO);

    const remove = row.insertCell();
    remove.innerHTML = "&#128465;";
    remove.classList.add('action', 'remove');
    remove.dataset.rowId = row.id;
    remove.addEventListener('click', removeToDo);

    clearFormData();
}

const doneToDO = (e) => {
    const element = e.target;
    document.getElementById(e.target.dataset.rowId).childNodes[0].classList.toggle('description-done');
    e.target.classList.toggle('done');
    e.target.classList.toggle('done-todo');
}

const removeToDo = (e) => {
    document.getElementById(e.target.dataset.rowId).remove();
}

const form = document.getElementById('todo-form');
form.addEventListener('submit', insertToDo);

const list = document.getElementById('todo-list').getElementsByTagName('tbody')[0];