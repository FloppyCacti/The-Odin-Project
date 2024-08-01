import { makeListContainer, makeListContent, refreshArray } from './list-content.js';

export function addSideBar(){
    const categories = JSON.parse(localStorage.categories);

    function InsertSideBarToContainer(){
        const container = document.querySelector('#container');

        const sideBar = document.createElement('div');
        sideBar.setAttribute('id', 'sideBar');
        localStorage.categories = JSON.stringify(categories);

        container.appendChild(sideBar);
    }

    function buttonToAddCategory(){
        const sideBar = document.querySelector('#sideBar');

        const addButton = document.createElement('button');
        addButton.innerHTML = '➕ Add Category';
        addButton.classList.add('sidebarButtons')
        addButton.setAttribute('id', 'addCategoryButton');
        addButton.addEventListener('click', () => { showCategoryFormDialog() });

        sideBar.appendChild(addButton);
    }

    function categoryFactory(name){
        return{
            categoryName: name,
            taskToDoArray: [],
            taskCompletedArray: []
        }
    }

    function insertCategoriesIntoSideBar(){
        const sideBar = document.querySelector('#sideBar');
        let listOfCategories = document.querySelector('#categoryContainer');
        if (listOfCategories) {
            listOfCategories.remove();
        }
        listOfCategories = document.createElement('div');
        listOfCategories.setAttribute('id', 'categoryContainer');
    
        categories.forEach(element => {
            let category = document.createElement('div');
            category.setAttribute('id', 'categoryButtonContainer');

            let editCategoryButton = document.createElement('button');
            editCategoryButton.classList.add('sidebarButtons');
            editCategoryButton.innerHTML = '📝';
            editCategoryButton.addEventListener('click', () => {
                editCategoryName(element);
            })

            let deleteCategoryButton = document.createElement('button');
            deleteCategoryButton.classList.add('sidebarButtons');
            deleteCategoryButton.innerHTML = '🗑';
            deleteCategoryButton.addEventListener('click', () => {
                deleteCategory(element);
            })

            let categoryElement = document.createElement('button');
            categoryElement.classList.add('sidebarButtons');
            categoryElement.setAttribute('id', 'categoryElement');
            categoryElement.innerHTML = `${element.categoryName}`;
            categoryElement.addEventListener('click', () => {
                refreshArray(element.taskToDoArray, element.taskCompletedArray);
                makeListContent();
                localStorage.categories = JSON.stringify(categories);
            })

            category.appendChild(categoryElement);
            category.appendChild(editCategoryButton);
            category.appendChild(deleteCategoryButton);
            listOfCategories.appendChild(category);
        });

        sideBar.appendChild(listOfCategories);
    }

    function createCategoryForm(){
        const container = document.createElement('dialog');
        container.setAttribute('id', 'categoryFormDialog');
        const form = document.createElement('form');
        const categoryName = document.createElement('div');
        const categoryNameLabel = document.createElement('label');
        const categoryNameInput = document.createElement('input');
        const buttons = document.createElement('div');
        const cancelButton = document.createElement('button');
        const submitButton = document.createElement('button');
        
        function showError(){
            const showError = document.createElement('div');
            showError.innerHTML = 'input cannot be empty'
            showError.style.color = 'red';

            categoryName.appendChild(showError);
        }
        
        container.setAttribute('id', 'sideBarDialog');
        container.addEventListener('keydown', () => {
            if(event.key === 'Enter'){
                event.preventDefault();
            }
        })
        categoryNameLabel.innerHTML = 'Name: '
        cancelButton.innerHTML = 'Cancel';
        cancelButton.addEventListener('click', (event) => {
            event.preventDefault();
            form.reset();
            container.close();
        })
        submitButton.innerHTML = 'Submit';
        submitButton.addEventListener('click', (event) =>{
            event.preventDefault();
            if(categoryNameInput.value == ''){
                showError();
            }else{
                addCategoryToArray(categoryNameInput.value);
                container.close();
                insertCategoriesIntoSideBar();
            }
        })

        document.querySelector('body').appendChild(container);
        container.appendChild(form);
        categoryName.appendChild(categoryNameLabel);
        categoryName.appendChild(categoryNameInput);
        buttons.appendChild(cancelButton);
        buttons.appendChild(submitButton);
        form.appendChild(categoryName);
        form.appendChild(buttons);

        container.showModal();
    }

    function addCategoryToArray(name){
        categories.push(categoryFactory(name));
        localStorage.categories = JSON.stringify(categories);
    }

    function deleteCategory(element){
        const index = categories.indexOf(element)

        if (index > -1) {
            categories.splice(index, 1);
            insertCategoriesIntoSideBar();
            localStorage.categories = JSON.stringify(categories);
        }
    }

    function editCategoryName(element){
        const index = categories.indexOf(element);

        const newName = prompt('New Name: ');

        if (index > -1){
            element.categoryName = newName;
            insertCategoriesIntoSideBar();
        }
        localStorage.categories = JSON.stringify(categories);
    }

    function showCategoryFormDialog() {
        const dialog = document.getElementById('categoryFormDialog');
        if (!dialog) {
            dialog = createCategoryForm();
        }
        dialog.showModal();
    }

    InsertSideBarToContainer();
    buttonToAddCategory();
    insertCategoriesIntoSideBar();
    makeListContainer();
}