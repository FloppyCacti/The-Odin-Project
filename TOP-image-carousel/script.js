    function image_carousel(){
        let images = document.querySelectorAll('#images img');
        let currentIndex = 0;
        let buttons = [];

        function showImage(){
            images[currentIndex].classList.remove('visible');
            buttons[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('visible');
            buttons[currentIndex].classList.add('active');
        }

        images[currentIndex].classList.add('visible');

        document.querySelector('#previous-image').addEventListener('click', () => {
            images[currentIndex].classList.remove('visible');
            buttons[currentIndex].classList.remove('active');
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            images[currentIndex].classList.add('visible');
            buttons[currentIndex].classList.add('active');
        });
        
        document.querySelector('#next-image').addEventListener('click', () => {
            images[currentIndex].classList.remove('visible');
            buttons[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('visible');
            buttons[currentIndex].classList.add('active');
        });

        images.forEach((ele, index) => {
            const container = document.querySelector('#dot-nav');
            const button = document.createElement('button');
            button.style.borderRadius = '100%';
            button.style.height = '15px';
            button.style.width = '15px';
            button.addEventListener('click', () => {
                images[currentIndex].classList.remove('visible');
                buttons[currentIndex].classList.remove('active');
                currentIndex = index;
                images[currentIndex].classList.add('visible');
                buttons[currentIndex].classList.add('active');
            })

            if(ele.classList.contains('visible')){
                button.style.color = 'black';
            }

            container.appendChild(button);
            buttons.push(button);
        });

        setInterval(showImage, 3000);
    }

    image_carousel();