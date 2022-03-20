const loginForm = document.querySelector("#login-form");
const loginLabel = document.querySelector("#login-label");
const loginInput = document.querySelector("#login-input");
const helloMessage = document.querySelector("#hello-message");
const todoSpan = document.querySelector("#today-todo");
const todoInput = document.querySelector("#todo");
const HIDDEN__CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN__CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    helloMessage.innerText = `Hello ${username}`;
    helloMessage.classList.remove(HIDDEN__CLASSNAME);
    todoSpan.classList.remove(HIDDEN__CLASSNAME);
    todoInput.classList.remove(HIDDEN__CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null){
    loginForm.classList.remove(HIDDEN__CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    paintGreetings(savedUsername);
}