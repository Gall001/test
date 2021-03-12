const menubutton = document.querySelector('.menu-button');
const hamburger = document.querySelector('.menu-button__burger');
const nev = document.querySelector('.nev');
const menuNev = document.querySelector('.menu-nev');
const nevItems = document.querySelectorAll('.menu-nev__item');

let ShowMenu = false;

menubutton.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!ShowMenu){
        hamburger.classList.add('open');
        nev.classList.add('open');
        menuNev.classList.add('open');
        nevItems.forEach(item => item.classList.add('open'));

        ShowMenu = true;
    } else {
        hamburger.classList.remove('open');
        nev.classList.remove('open');
        menuNev.classList.remove('open');
        nevItems.forEach(item => item.classList.remove('open'));

        ShowMenu = false;
    }
}