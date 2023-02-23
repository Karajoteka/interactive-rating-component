// Hacer que cambie la pantalla
const submitButton = document.querySelector('.submit-button');
const submitContainer = document.querySelector('.submit-container');
const resultContainer = document.querySelector('.result-container');

submitButton.addEventListener('click', showResultContainer);

function showResultContainer() {
  resultContainer.classList.remove('inactive');
  submitContainer.classList.add('inactive');
}

// Hacer que aparezca, en la segunda pantalla, el número seleccionado en la primera
const btn1 = document.querySelector('#number-1');
const btn2 = document.querySelector('#number-2');
const btn3 = document.querySelector('#number-3');
const btn4 = document.querySelector('#number-4');
const btn5 = document.querySelector('#number-5');

const selectedNumber = document.querySelector('.selectedNumber');

function btnOnClick() {
  console.log('Escuchando click');
  btn1.value = 1;
  btn2.value = 2;
  btn3.value = 3;
  btn4.value = 4;
  btn5.value = 5;
  selectedNumber.innerHTML = btn1.value;
}
