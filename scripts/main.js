const hamburgerBtn = document.querySelector('.menu__hamburger');
const asideMenu = document.querySelector('.menu__aside');

hamburgerBtn.addEventListener('click', (e) => {
    asideMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (e.target.closest('.menu__hamburger') || e.target == asideMenu) {
        return;
    } else {
        asideMenu.classList.remove('show');
    }
});


const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if (window.scrollY) {
        nav.classList.add('menu--active');
    } else {
        nav.classList.remove('menu--active');
    }
});



