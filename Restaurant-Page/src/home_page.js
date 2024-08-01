import img from './Los_Pollos_Hermanos_logo.png';

function homePage(){
    const parent_div = document.querySelector('#content');
    const logo = new Image();
    logo.src = img;
    const name = document.createElement('h1');
    name.innerHTML = 'Los Pollos Hermanos';
    const slogan = document.createElement('h2');
    slogan.innerHTML = '!Taste the Family!';

    parent_div.appendChild(logo);
    parent_div.appendChild(name);
    parent_div.appendChild(slogan);
}

export default homePage;