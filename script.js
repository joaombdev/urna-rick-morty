// const input = document.querySelector('.input-nome');
// const button = document.querySelector('.ir-para-urna');
// const form = document.querySelector('.form');

// const validateInput = ({target}) => {
//     if (target) {
//         button.removeAttribute('disabled');
//         return;
//     }

//     button.setAttribute('disabled');
// }

// const handleSubmit = (event) => {
//     event.preventDefault();

//     localStorage.setItem('Eleitor', input.value);
//     window.location = 'urna.html';
// }

// input.addEventListener('input', validateInput);
// form.addEventListener('submit', handleSubmit);


let menu_quem_votar = document.getElementById('em-quem-votar');
let menu_candiatos = document.getElementById('menu-candidatos');

// menu_quem_votar.addEventListener('click', () => {
//     menu_candiatos.classList.toggle('ativo');
//     console.log('sim, você clicou aqui')
// })

menu_quem_votar.onclick = function(){
    menu_candiatos.classList.toggle('ativo');
}

document.onclick = function(e){
    if (e.target.id !== 'em-quem-votar' && e.target.id !== 'em-quem-votar') {
        menu_candiatos.classList.remove('ativo');
    }
}
