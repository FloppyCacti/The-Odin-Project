let numSqu = 16;

const container = document.querySelector('.container');

population = function(size){

    const squX = 800/size;

    container.replaceChildren();

    let amount = size * size;

    for(let i = 0; i < (amount); i++){

        let square = document.createElement('div');

        square.addEventListener('mouseover', mouseOver = function(){
            square.style.backgroundColor = 'red';
        })
        square.classList.add('square')
        square.style.borderStyle = 'none';
        square.style.height = squX.toString() + 'px';
        square.style.width = squX.toString() + 'px';
        square.style.backgroundColor = 'black';

        container.appendChild(square);
    }
}

population(numSqu);

function numClick(){
    let num = prompt('Number of square');
    if(num >= 2 && num <= 100){
        population(num);
    }
}