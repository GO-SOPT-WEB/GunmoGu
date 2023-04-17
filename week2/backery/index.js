const product = [];
const categoryList = [];

const categoryButton = document.querySelectorAll('.nav-item > label > input');

categoryButton.forEach((button) => {
    button.addEventListener('click', (event) => {
        const category = event.target.dataset.category;
        if (button.checked) {
            categoryList.push(category);
        } else {
            const index = categoryList.indexOf(category);
            categoryList.splice(index, 1);
        }
        // const categoryProducts = products.filter((product) => product.category === category);
        // displayProducts(categoryProducts);
        displaySelectFilter();
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
        });
    });
};

const displayProducts = (products) => {
    const productsContainer = document.querySelector('.grid-container');
    productsContainer.innerHTML = '';
    products.forEach((product) => {
        const productElement = document.createElement('article');
        productElement.classList.add('card');
        productElement.innerHTML = `
        <h2 class="card-title">소금빵</h2>
        <div class="card-tagwrapper">
          <ul class="card-tags">
            <li class="card-tag">#맛있어</li>
            <li class="card-tag">#내가 좋아해</li>
            <li class="card-tag">#진짜야</li>
          </ul>
          <button class="card-tags-add">+</button>
        </div>
        <img src="./salt-bread.jpg" alt="상품이미지" />
        <button class="card-like">
          <i class="fa fa-heart"></i>
        </button>
    `;
        productsContainer.appendChild(productElement);
    });
}

const deleteButtons = document.querySelectorAll('.select-filter-item-delete');
deleteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const parent = event.target.closest('.select-filter-item');
        const category = parent.querySelector('span').textContent;
        const index = categoryList.indexOf(category);
        categoryList.splice(index, 1);
        displaySelectFilter();
    });
});