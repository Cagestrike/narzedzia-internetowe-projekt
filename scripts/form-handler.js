const submit = document.querySelector('.btn--submit');
const form = document.querySelector('.main-form');

let formData = new Map();

form.addEventListener('submit', e => {
    e.preventDefault();
    const inputs = document.querySelectorAll('input');



    inputs.forEach(el => {
        if (el.validity.valid && el.value != "" && !isButton(el)) {
            if (el.type == 'radio') {
                if (el.checked) {
                    formData.set(el.name, el.value);
                }
            } else {
                formData.set(el.id, el.value);
            }
        }
    })


    console.log(formData);
});

function isButton(el) {
    return el.classList.contains('btn');
}