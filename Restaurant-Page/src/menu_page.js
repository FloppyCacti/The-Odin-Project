function menuPage(){
    const menu = document.querySelector('#content');

    const breakfastContainer = document.createElement('div');
    const rancherosContainer = document.createElement('div');

    breakfastContainer.innerHTML = 'Pollos Classic Breakfast [2.99]<br> Pollos Chicken Biscuit [3.99]<br> Pollos Breakfast Sandwich [4.59]<br> Pollos Breakfast Tacos [4.99]'
    rancherosContainer.innerHTML = 'Huevos Rancheros [5.49]<br> Carne Adovada Rancheros [5.99]<br> Taco Rancheros [5.99]<br> Enchilada Rancheros [5.99]'

    menu.appendChild(breakfastContainer);
    menu.appendChild(rancherosContainer);
}

export default menuPage;