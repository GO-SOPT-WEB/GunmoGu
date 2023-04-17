import data from "./todo.js";

const todoCategoryList = data.map((todoData) => todoData.category);

const categoryContainer = document.querySelector(".category-container");
todoCategoryList.forEach((category) => {
    const categoryItemElement = document.createElement("article");
    categoryItemElement.innerHTML = `
    <article class="category-item">${category}</article>
    `;
    categoryContainer.appendChild(categoryItemElement);
});
