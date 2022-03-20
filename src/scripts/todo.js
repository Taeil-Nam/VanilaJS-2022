const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
let todos = [];

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event) {
const li = event.target.parentElement;
li.remove();
todos = todos.filter(todo => todo.id !== parseInt(li.id));
saveTodos()
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}

function todoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos()
}

todoForm.addEventListener("submit", todoSubmit);

const savedTodos = localStorage.getItem("todos");

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
};

