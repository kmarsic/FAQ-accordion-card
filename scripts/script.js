const accordion = document.querySelectorAll('.accordion-toggle');

function rotateImage(image) {

    if (image.classList.contains('rotated')) {
        image.style.transform = 'rotate(0deg)';
    }

    else {
        image.style.transform = 'rotate(180deg)';
    }

    image.classList.toggle('rotated');
}

function accordionToggle (div) {
    
    if (div.classList.contains('none')) {
        div.style.maxHeight = '0'
        div.style.marginTop = '0'
    }

    else {
        div.style.maxHeight = div.scrollHeight + "px";
        div.style.marginTop = '0.5rem'

    }

    div.classList.toggle('none');

    
}

function boldDiv (div) {
    if (div.classList.contains('bold')) {
        div.style.fontWeight = 'normal';
    }

    else {
        div.style.fontWeight = 'bold';
    }

    div.classList.toggle('bold');
}

accordion.forEach(container => {
    const image = container.querySelector('.rotate');
    container.addEventListener('click', () => {
      rotateImage(image);
    });
    const div = container.querySelector('.collapse')
    container.addEventListener('click', () => {
        accordionToggle(div);
    })

    const getBold = container.querySelector('.top-container')
    container.addEventListener('click', () => {
        boldDiv(getBold);
    } )
  });

