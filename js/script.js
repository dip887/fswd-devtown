const todoList = document.querySelector('ol');
const input = document.querySelector('input');
const addBtn = document.querySelector('button');


const handleAdd = ()=>{
    const ele = document.createElement('li');
    //---------
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = ' delete';
    deleteBtn.addEventListener('click', ()=>{ele.remove()});
    //----------
    ele.innerHTML = input.value;
    ele.appendChild(deleteBtn);
    todoList.appendChild(ele);
}

addBtn.addEventListener('click', handleAdd);
