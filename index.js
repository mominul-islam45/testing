const input = document.getElementById('todoText');
const add = document.getElementById('todoAdd');
const ul = document.getElementById('todoList');

let items = 0;

function addTodo() {
    if (input.value === ''){
        alert('Please enter a task!');
        return;
    }
    else{
        let li = document.createElement('li')
        li.className = 'todo-item';

        let output = document.createElement('span');
        output.className = 'todo-output';
        output.textContent = input.value;

        let editBtn = document.createElement('button')
        editBtn.type = 'button';
        editBtn.id = 'edit${items}';
        editBtn.className = 'edit-btn';
        editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        editBtn.onclick = function(){
            editTodo(output, editBtn)
        }

        let deleteBtn = document.createElement('button')
        deleteBtn.id = 'delete${items}';
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        deleteBtn.onclick = function(){
            deleteTodo(deleteBtn);
        }
 

        li.appendChild(output)
        li.appendChild(editBtn)
        li.appendChild(deleteBtn)
        ul.appendChild(li)

        input.value = '';
        items++;
    }
}

function deleteTodo(btn){
    ul.removeChild(btn.parentElement);
}

function editTodo(output, editBtn){
    if(editBtn.type === 'button'){
        let newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.className = 'todo-output-edit';
        newInput.value = output.textContent;
        output.replaceWith(newInput);
        editBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
        editBtn.type = 'submit';
    }
    else{  
        output.textContent = editBtn.previousSibling.value;
        editBtn.previousSibling.replaceWith(output);
        editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        editBtn.type = 'button';
    }
}