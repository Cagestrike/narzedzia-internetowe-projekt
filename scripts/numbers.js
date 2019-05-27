const bigNumbers = document.querySelectorAll('.numbers--big');

const about = document.getElementById('about');
window.addEventListener('scroll', displayNumbers);

function displayNumbers() {
    if (about.getBoundingClientRect().top - window.innerHeight <= 0) {
        window.removeEventListener('scroll', displayNumbers);

        bigNumbers.forEach((el) => {
            let currentNum = Number(el.innerHTML);
            let i = 0;
            let stepTime = Math.floor(2000 / currentNum);

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