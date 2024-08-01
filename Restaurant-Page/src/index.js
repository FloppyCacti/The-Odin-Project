import homePage from './home_page.js';
import menuPage from './menu_page.js';
import contactPage from './contact_page.js';
import './style.css';

const buttons = document.querySelectorAll('.button a');

buttons.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        
        let id = element.getAttribute('id');

        switch(id){
            case 'homeButton':
                document.querySelector('#content').innerHTML = '';
                homePage();
                break;
            case 'menuButton':
                document.querySelector('#content').innerHTML = '';
                menuPage();
                break;
            case 'contactButton':
                document.querySelector('#content').innerHTML = '';
                contactPage();
                break;
        }
    })
});