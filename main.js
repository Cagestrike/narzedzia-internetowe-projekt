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

const bigNumbers = document.querySelectorAll('.numbers--big');

const about = document.getElementById('about');
window.addEventListener('scroll', displayNumbers);

function displayNumbers() {
    if (about.getBoundingClientRect().top - window.innerHeight <= 0) {
        window.removeEventListener('scroll', displayNumbers);

        bigNumbers.forEach((el) => {
            let currentNum = Number(el.innerHTML);
            let i = 0;
            let stepTime = Math.floor(1000 / currentNum);

            let timer = setInterval(function () {
                i++;
                el.innerHTML = i;
                if (i == currentNum) {
                    clearInterval(timer);
                }
            }, stepTime);
        });
    }
}


const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY) {
        nav.classList.add('menu--active');
    } else {
        nav.classList.remove('menu--active');
    }
});



