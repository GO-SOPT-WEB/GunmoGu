import data from "./todo.js";

const todoDataList = data
const todoContainer = document.querySelector(`.todo-container`)
const displayTodo = (todoData) => {
    const todoboxes = todoDataList.map((todoData) => {
        const todobox = document.createElement('article')
        todobox.classList.add('todo-box')
        todobox.innerHTML = `
        <article class="todo-box">
        <header class="todo-category" category="${todoData.category}">
        <h2 class="todo-category-title">${todoData.category}</h2>
        <button class="todo-add-btn">
        <i class="fa fa-plus"></i>
        </button>
        </header>
        <ul class="todo-list">
        </ul>
        </article>
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
        return todobox.innerHTML
    })
    todoContainer.innerHTML = todoboxes.join('')
}

displayTodo(todoDataList)

const displayTodoNumber = () => {
    const todoNumber = data
        .map((todoData) => todoData.todo
            .filter((todo) => !todo.done).length)
        .reduce((a, b) => a + b, 0);

    const calanderItemElement = document.querySelectorAll('.calander-item')
    calanderItemElement.forEach((calanderItem) => {
        if (calanderItem.classList.contains('today')) {
            const todoNumberElement = calanderItem.querySelector('.todo-number')
            todoNumberElement.innerHTML = todoNumber
        }
    })
}

displayTodoNumber()

todoContainer.addEventListener('click', (event) => {
    const todoElement = event.target.closest('.todo-name')
    if (todoElement) {
        const done = todoElement.querySelector('.fa-heart').dataset.done
        if (done == 'true') {
            todoElement.querySelector('.fa-heart').dataset.done = 'false'
            todoDataList.map((todoData) => {
                todoData.todo.map((todo) => {
                    if (todo.title == todoElement.querySelector('span').innerHTML) {
                        todo.done = false
                    }
                })
            })
        } else {
            todoElement.querySelector('.fa-heart').dataset.done = 'true'
            todoDataList.map((todoData) => {
                todoData.todo.map((todo) => {
                    if (todo.title == todoElement.querySelector('span').innerHTML) {
                        todo.done = true
                    }
                })
            })
        }
        displayTodoNumber()
    }
});

todoContainer.addEventListener('click', (event) => {
    const todoAddButton = event.target.closest('.todo-add-btn')
    if (todoAddButton) {
        const todoModal = document.querySelector('.modal-wrapper')
        todoModal.classList.add('show')
        todoModal.style.display = 'block'
        todoModal.attributes['category'] = todoAddButton.closest('.todo-category').attributes['category'].value
    }
});

const modalCloseButton = document.querySelector('.modal-close-btn')
modalCloseButton.addEventListener('click', (e) => {
    const todoModal = document.querySelector('.modal-wrapper')
    todoModal.classList.remove('show')
    todoModal.style.display = 'none'
});

const modalAddButton = document.querySelector('.modal-submit-btn')
modalAddButton.addEventListener('click', (e) => {
    const todoModal = document.querySelector('.modal-wrapper')
    todoModal.classList.remove('show')
    todoModal.style.display = 'none'
    const todoTitle = todoModal.querySelector('#todo-content').value
    const todoElement = document.createElement('li')
    todoElement.classList.add('todo-name')
    const category = todoModal.attributes['category']
    todoDataList.forEach((todoData) => {
        if (todoData.category == category) {
            todoData.todo.push({
                title: todoTitle,
                done: false
            })
        }
    });
    console.log(todoDataList)
    displayTodo(todoDataList)
    displayTodoNumber()
});

