const menu = document.querySelector('#menu');
const navBar = document.querySelector('nav');
const navBarLinks = document.querySelectorAll('nav p');
const contact = document.querySelector('#contact');

menu.addEventListener('click', () => {
    navBar.classList.toggle("show");
    for (let i = 0; i < navBarLinks.length; i++) {
        navBarLinks[i].classList.toggle("show"); 
    }
});