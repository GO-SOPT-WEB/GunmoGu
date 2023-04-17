import data from "./backery.js";

const products = data
console.log(data)
const categoryList = [];

const categoryButton = document.querySelectorAll('.nav-item > label > input');

products.forEach((product) => {
    const productsContainer = document.querySelector('.grid-container');
    const productElement = document.createElement('article');
    productElement.classList.add('card');
    productElement.innerHTML = `
    <h2 class="card-title">${product.name}</h2>
    <div class="card-tagwrapper">
        <ul class="card-tags">
        </ul>
        <button class="card-tags-add">+</button>
    </div>
    <img src="${product.image}" alt="상품이미지" />
    <button class="card-like">
        <i class="fa fa-heart"></i>
    </button>
    `;
    product.tag.forEach((tag) => {
        const tagElement = document.createElement('li');
        tagElement.classList.add('card-tag');
        tagElement.textContent = tag;
        productElement.querySelector('.card-tags').appendChild(tagElement);
    });
    productsContainer.appendChild(productElement);
});

categoryButton.forEach((button) => {
    button.addEventListener('click', (event) => {
        const category = event.target.dataset.category;
        if (button.checked) {
            categoryList.push(category);
        } else {
            const index = categoryList.indexOf(category);
            categoryList.splice(index, 1);
        }
        displaySelectFilter();
        displayProducts();
    });
});

const displaySelectFilter = () => {
    const selectFilter = document.querySelector('.select-filter');
    const selectFilterElements = categoryList.map((category) => {
        return `
        <div class="select-filter-item">
          <span>${category}</span>
          <button class="select-filter-item-delete">
            <i class="fa fa-times"></i>
          </button>
        </div>
      `;
    });
    selectFilter.innerHTML = selectFilterElements.join("");
    const deleteButtons = selectFilter.querySelectorAll('.select-filter-item-delete');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const parent = event.target.closest('.select-filter-item');
            const category = parent.querySelector('span').textContent;
            const index = categoryList.indexOf(category);
            categoryList.splice(index, 1);
            categoryButton.forEach((categoryBtn) => {
                if (categoryBtn.dataset.category === category) {
                    categoryBtn.checked = false;
                }
            })
            displaySelectFilter();
            displayProducts();
        });
    });
};

const displayProducts = () => {
    let categoryProducts = [];
    if (categoryList.length === 0) {
        categoryProducts = products;
    } else if (categoryList.indexOf('all') > -1) {
        categoryProducts = products;
    } else {
        categoryProducts = products.filter((product) => categoryList.indexOf(product.category) !== -1);
    }
    const productsContainer = document.querySelector('.grid-container');
    productsContainer.innerHTML = '';
    categoryProducts.forEach((product) => {
        const productElement = document.createElement('article');
        productElement.classList.add('card');
        productElement.innerHTML = `
        <h2 class="card-title">${product.name}</h2>
        <div class="card-tagwrapper">
          <ul class="card-tags">
          </ul>
          <button class="card-tags-add">+</button>
        </div>
        <img src="${product.image}" alt="상품이미지" />
        <button class="card-like">
          <i class="fa fa-heart"></i>
        </button>
        `;
        product.tag.forEach((tag) => {
            const tagElement = document.createElement('li');
            tagElement.classList.add('card-tag');
            tagElement.textContent = tag;
            productElement.querySelector('.card-tags').appendChild(tagElement);
        });
        productsContainer.appendChild(productElement);
    });
}