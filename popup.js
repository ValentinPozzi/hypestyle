const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        popup.style.display = 'block';
    }, 3000);
});

button.addEventListener('click', e => {
   alert('Gracias por suscribirte a nuestro Newsletter!');
   popup.style.display = 'none';
})
close.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', e => {
    if(e.target.className === 'popup-close') {
        popup.style.display = 'none';
    }
});
