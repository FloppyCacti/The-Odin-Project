// Switch .dropdown-menu-container visibility (hidden and visible) depending on its current visibility
// Switch happens when div .dropdown-menu-button-click is clicked
exports.addClickableMenu = () => {
    const dropdownClick = document.querySelectorAll('.dropdown-menu-button-click').forEach((ele, index) => {
        ele.addEventListener('click', () => {
        const dropdownMenu = document.querySelectorAll('.dropdown-menu-container-click')[index];

        if(dropdownMenu.style.visibility == 'visible'){
            dropdownMenu.style.visibility = 'hidden';
        }else{
            dropdownMenu.style.visibility = 'visible';
        }

        // hide .dropdown-menu-container visibility when window is clicked
        window.addEventListener('click', (event) => {
            if(!event.target.matches('.dropdown-menu-button-click')){
                dropdownMenu.style.visibility = 'hidden';
            }
        });
    });
    });
}

// Switch happens when div .dropdown-menu-cotainer-hover is hovered over
exports.addHoverableMenu = () => {
    const dropdownHover = document.querySelectorAll('.dropdown-menu-button-hover').forEach((ele, index) => {
        ele.addEventListener('mouseover', () => {
            const dropdownMenu = document.querySelectorAll('.dropdown-menu-container-hover')[index];
            dropdownMenu.style.visibility = 'visible';

            //hide .dropdown-menu-button-hover visibility when mouse is not hoverning over .dropdown-menu-button-hover
            ele.addEventListener('mouseout', () => {
                dropdownMenu.style.visibility = 'hidden';
            });

            dropdownMenu.addEventListener('mouseover', () => {
                dropdownMenu.style.visibility = 'visible';
            });

            dropdownMenu.addEventListener('mouseout', () => {
                dropdownMenu.style.visibility = 'hidden';
            });
        });
    });
}