const bigNumbers = document.querySelectorAll('.big-number');

const oNas = document.getElementById('o-nas');
window.addEventListener('scroll', displayNumbers);

function displayNumbers() {
    if (oNas.getBoundingClientRect().top - window.innerHeight <= 0) {
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
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
});

