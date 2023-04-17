import data from "./todo.js";

const todoDataList = data

todoDataList.forEach((todoData) => {
    const todoContainer = document.querySelector(`.todo-container`)
    const todobox = document.createElement('article')
    todobox.classList.add('todo-box')
    todobox.innerHTML = `
        <header class="todo-category" category="${todoData.category}">
            <h2 class="todo-category-title">${todoData.category}</h2>
            <button>
                <i class="fa fa-plus"></i>
            </button>
        </header>
        <ul class="todo-list">
        </ul>
    `
    todoData.todo.forEach((todo) => {
        const todoList = todobox.querySelector('.todo-list')
        const todoElement = document.createElement('li')
        todoElement.classList.add('todo-name')
        todoElement.innerHTML = `
            <i class="fa fa-heart" data-done="${todo.done}"></i>
            <span>${todo.title}</span>
        `
        todoList.appendChild(todoElement)
    });
    todoContainer.appendChild(todobox)
})

const todoNumber = data
    .map((todoData) => todoData.todo.filter((todo) => !todo.done).length)
    .reduce((a, b) => a + b, 0);
const calanderItemElement = document.querySelectorAll('.calander-item')
calanderItemElement.forEach((calanderItem) => {
    if (calanderItem.classList.contains('today')) {
        const todoNumberElement = calanderItem.querySelector('.todo-number')
        todoNumberElement.innerHTML = todoNumber
    }
})