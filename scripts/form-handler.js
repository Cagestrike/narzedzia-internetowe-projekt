const submit = document.querySelector('.btn--submit');
const form = document.querySelector('.main-form');
const showBtn = document.getElementById('show-btn');
const inputs = document.querySelectorAll('input');
const clearBtn = document.querySelector('.btn--reset');

let formData = new Map();
let keys = [];

form.addEventListener('submit', e => {
    e.preventDefault();
    sessionStorage.clear();

    inputs.forEach(el => {
        if (el.validity.valid && el.value != "" && !isButton(el)) {
            if (el.type == 'radio') {
                if (el.checked) {
                    // formData.set(el.name, el.value);
                    sessionStorage.setItem(el.name, el.value);
                    keys.push(el.name);
                }
            } else {
                // formData.set(el.id, el.value);
                sessionStorage.setItem(el.id, el.value);
                keys.push(el.id);
            }
        }
    });

    form.reset();

    alert('dane zostaly zapisane do sessionStorage!');
});

showBtn.addEventListener('click', e => {
    if (!sessionStorage.length) {
        alert('Session storage jest pusty!');
    } else {
        inputs.forEach(el => {
            if (!isButton(el)) {
                if (el.type == 'radio') {
                    if (el.value == sessionStorage.getItem(el.name))
                        el.checked = true;
                } else {
                    el.value = sessionStorage.getItem(el.id);
                }
            }
        });
    }
});

clearBtn.addEventListener('click', e => {
    if (!sessionStorage.length) {
        alert('Session storage jest pusty!');
    } else {
        alert('Wyczyszczono session storage!');
        sessionStorage.clear();
    }

})

function isButton(el) {
    return el.classList.contains('btn');
}