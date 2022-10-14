const inputEl = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoContainer = document.querySelector(".todos");
const toast = document.querySelector(".toast");

const addTodo = () => {
    const todo = inputEl.value;
    if(!todo.trim()){
        toast.innerHTML = "Input field is required!";
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
        return;
    }

    const divEl = document.createElement("div"); // <div></div>
    const spanEl = document.createElement("span"); // <span></span>
    const textNode = document.createTextNode(todo); // user input

    spanEl.setAttribute("class", "delete");  // <span class="delete"></span>

    divEl.setAttribute("class", "todo"); // <div class="todo"></div>
    divEl.appendChild(textNode) // <div class="todo">todo</div>
    divEl.appendChild(spanEl) // <div class="todo">todo <span class="delete"></span></div>

    todoContainer.appendChild(divEl);
    inputEl.value = "";

    // // Delete functionality
    // spanEl.addEventListener("click", () => {
    //     todoContainer.removeChild(spanEl.parentElement);
    // });
}

addBtn.addEventListener("click", addTodo);

// Delete todo
todoContainer.addEventListener("click", (event) => {
    if(event.target.className === "delete"){
        todoContainer.removeChild(event.target.parentElement)
    }
});
