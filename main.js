const novaTarefa = document.querySelector('[data-form-button]');
console.log( novaTarefa );

const input = document.querySelector('[data-form-input]');
const valor = input.value
console.log( valor );

// Eventos do DOM
// Onde? , O que? , Quando?
// Botão, fui clicado, quando o botão for clicado
// click,  console.log("fui clicado") , novaTarefa
// Toda vez que você utiliza um evento, esse é o padrão a ser seguido:
novaTarefa.addEventListener('click', () => {
    console.log("fui clicado")});
