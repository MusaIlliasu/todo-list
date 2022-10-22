const inputEl = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoContainer = document.querySelector(".todos");
const toast = document.querySelector(".toast");

const addTodo = () => {
    const todo = inputEl.value;
    if(!todo.trim()){
        toast.innerHTML = "Input field is required!";
        toast.classList.add("show");
        return setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }

    const id = String(new Date().getTime());
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos){
        localStorage.setItem("todos", JSON.stringify([...todos, { id, todo }]));
    } else {
        localStorage.setItem("todos", JSON.stringify([{ id, todo} ]));
    }

    const divEl = document.createElement("div");
    divEl.setAttribute("class", "todo");
    divEl.innerHTML = `${todo} <span class="delete" id="${id}"></span>`;
    todoContainer.appendChild(divEl);
    inputEl.value = "";
}

addBtn.addEventListener("click", addTodo);

// Delete todo
todoContainer.addEventListener("click", (event) => {
    if(event.target.className === "delete"){
        const todoId = event.target.id;
        const todos = JSON.parse(localStorage.getItem("todos"));
        const result = todos.filter(todo => todo.id !== todoId);
        localStorage.setItem("todos", JSON.stringify(result));
        todoContainer.removeChild(event.target.parentElement);
    }
});

function render(){
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos){
        const result = todos.map((todo) => {
            return `<div class="todo">${todo.todo} <span class="delete" id="${todo.id}"></span></div>`
        });
        todoContainer.innerHTML = result.join("");
    }
}

render();
