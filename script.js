const input = document.querySelector('.input-nome');
const button = document.querySelector('.ir-para-urna');
const form = document.querySelector('.form');

const validateInput = ({target}) => {
    if (target) {
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute('disabled');
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('Eleitor', input.value);
    window.location = 'urna.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);