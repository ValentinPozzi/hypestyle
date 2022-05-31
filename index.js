let img = document.getElementsByClassName('img');
let header = document.getElementsByTagName('header');
let nav = document.getElementsByTagName('nav');
let container = document.getElementsByClassName('container');



window.addEventListener('scroll', (e) => {
    console.log();
    if(window.scrollY > 0){
        img[0].style.width = '100px';
        img[0].style.height = '100px';
        header[0].className = 'header-fixed';
        nav[0].style.margin = 'auto auto 10px auto';
    } else {
        img[0].style.width = '170px';
        img[0].style.height = '170px';
        header[0].className = '';
        nav[0].style.margin = 'auto';
    }
})
