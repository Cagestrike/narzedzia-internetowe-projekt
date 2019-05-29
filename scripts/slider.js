
function Carousel(containerID) {
    this.container = document.getElementById(containerID) || document.body;
    this.slides = this.container.querySelectorAll('.carousel');
    this.total = this.slides.length - 1;
    this.current = 0;

    this.slide(this.current);
}

Carousel.prototype.next = function () {
    (this.current === this.total) ? this.current = 0 : this.current += 1;
    this.slide(this.current);
};

Carousel.prototype.prev = function () {
    (this.current === 0) ? this.current = this.total : this.current -= 1;
    this.slide(this.current);
};

Carousel.prototype.slide = function (index) {
    if (index >= 0 && index <= this.total) {
        // this.stop();
        for (var s = 0; s <= this.total; s++) {
            if (s === index) {
                this.slides[s].style.display = "inline-block";
                this.slides[s].style.animation = "fadeIn 1s";
                // this.slides[s].style.visibility = 'visible';
                // this.slides[s].style.opacity = '1';
                // this.slides[s].classList.add('slider--visible');
                // this.slides[s].classList.remove('slider--hidden');


            } else {
                // this.slides[s].style.animation = "fadeOut 1s";
                this.slides[s].style.display = 'none';
                // this.slides[s].style.display = 'none';
                // this.slides[s].style.visibility = 'hidden';
                // this.slides[s].style.opacity = '0';
                // this.slides[s].classList.remove('slider--visible');
                // this.slides[s].classList.add('slider--hidden');
            }
        }
    }
};

let slider = new Carousel('slider');

document.getElementById('next').addEventListener('click', e => {
    slider.next();
});

document.getElementById('prev').addEventListener('click', e => {
    slider.prev();
})