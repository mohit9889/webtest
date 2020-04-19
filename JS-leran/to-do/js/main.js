const data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')):{
    todo: [],
    completed: []
};

//svg code of remove and complete button
const removeSvg = '<svg enable-background="new 0 0 22 22" version="1.1" viewBox="0 0 22 22" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path class="fill" d="m16.1 3.6h-1.9v-0.3c0-1.3-1-2.3-2.3-2.3h-1.7c-1.3 0-2.4 1-2.4 2.3v0.2h-1.9c-1.3 0-2.3 1-2.3 2.3v1.3c0 0.5 0.4 0.9 0.9 1v10.5c0 1.3 1 2.3 2.3 2.3h8.5c1.3 0 2.3-1 2.3-2.3v-10.4c0.5-0.1 0.9-0.5 0.9-1v-1.3c-0.1-1.3-1.1-2.3-2.4-2.3zm-7-0.3c0-0.6 0.5-1.1 1.1-1.1h1.7c0.6 0 1.1 0.5 1.1 1.1v0.2h-3.9v-0.2zm7.2 15.4c0 0.6-0.5 1.1-1.1 1.1h-8.5c-0.6 0-1.1-0.5-1.1-1.1v-10.5h10.6l0.1 10.5zm0.9-11.7h-12.4v-1.1c0-0.6 0.5-1.1 1.1-1.1h10.2c0.6 0 1.1 0.5 1.1 1.1v1.1z"/><path class="fill" d="m11 18c-0.4 0-0.6-0.3-0.6-0.6v-6.8c0-0.4 0.3-0.6 0.6-0.6s0.6 0.3 0.6 0.6v6.8c0 0.3-0.2 0.6-0.6 0.6z"/><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/><path class="fill" d="m14 18c-0.4 0-0.6-0.3-0.6-0.6v-6.8c0-0.4 0.3-0.6 0.6-0.6 0.4 0 0.6 0.3 0.6 0.6v6.8c0 0.3-0.3 0.6-0.6 0.6z"/></svg>';
const completeSvg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="nofill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';

renderTodoList();

//console.log(localStorage.getItem('todoList'));
console.log(JSON.parse(localStorage.getItem('todoList')))

const button = document.getElementById('add');
button.addEventListener('click', e => {
    const value = document.getElementById('item').value;
    if(value){
        addItem(value);
    } 
});

document.getElementById('item').addEventListener('keydown', e => {
    const value = this.value;
    if(e.code === 'Enter' && value){
        addItem(value);
    }
});

function addItem(value) {
    //console.log(value);
    addItemTodo(value);
    document.getElementById('item').value = '';

    data.todo.push(value);
    //console.log(data);
    dataObjectUpdated();
}

function renderTodoList() {
    if(!data.todo.length && !data.completed.length) return;

    for (let i=0; i<data.todo.length; i++) {
        const value = data.todo[i];
        addItemTodo(value);
    }

    for (let j=0; j<data.completed.length; j++) {
        const value = data.completed[j];
        addItemTodo(value);
    }
}

function dataObjectUpdated() {
    console.log(data);
    localStorage.setItem('todoList', JSON.stringify(data));
}

function completeItem(e){
    const item = this.parentNode.parentNode;
    const parent = item.parentNode;
    const id = parent.id;
    const value = item.innerText;
    //console.log(item, parent, id);

    if(id === 'todo'){
        data.todo.splice(data.todo.indexOf(value), 1);
        data.completed.push(value);
    } else {
        data.completed.splice(data.completed.indexOf(value), 1);
        data.todo.push(value);
    }

    //console.log(data);

    dataObjectUpdated();

    //check if the item should be added to completed or to re-added to todo
    const target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}

function removeItem(e){
   // console.log(this.parentNode.parentNode);
    const item = this.parentNode.parentNode;
    const parent = item.parentNode;
    const id = parent.id;
    const value = item.innerText;

    if(id === 'todo'){
        data.todo.splice(data.todo.indexOf(value), 1);
    } else {
        data.completed.splice(data.completed.indexOf(value), 1);
    }

    //console.log(data);

    dataObjectUpdated();

    parent.removeChild(item);
}

function addItemTodo(text, completed){
    //console.log(value);
    const list =(completed) ? document.getElementById('completed'):document.getElementById('todo');

    const item = document.createElement('li');
    item.innerText = text;

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSvg;

    //remove item from list
    remove.addEventListener('click', removeItem);

    const complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeSvg;

    //add to complete item list
    complete.addEventListener('click', completeItem);

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    //list.appendChild(item);
    list.insertBefore(item, list.childNodes[0]);//insert at the top of the list
}