// Hacer que el número seleccionado cambie de color. 
// Esto hace que cambie de color el número, pero no el contenedor
// Además, si selecciono un botón, todos los números cambian de color
const number1 = document.querySelector('#number-1');
const number2 = document.querySelector('#number-2');
const number3 = document.querySelector('#number-3');
const number4 = document.querySelector('#number-4');
const number5 = document.querySelector('#number-5');

number1.addEventListener('click', changeColor);
number2.addEventListener('click', changeColor);
number3.addEventListener('click', changeColor);
number4.addEventListener('click', changeColor);
number5.addEventListener('click', changeColor);


function changeColor() {
  number1.style.color = "white";
  number2.style.color = "white";
  number3.style.color = "white";
  number4.style.color = "white";
  number5.style.color = "white";
}




// Hacer que cambie la pantalla
const submitButton = document.querySelector('.submit-button');
const submitContainer = document.querySelector('.submit-container');
const resultContainer = document.querySelector('.result-container');

submitButton.addEventListener('click', showResultContainer);

function showResultContainer() {
  resultContainer.classList.remove('inactive');
  submitContainer.classList.add('inactive');
}




// resultContainer.classList.add('inactive');


// function changeScreen() {
  
// const isResultContainerClosed = resultContainer.classList.contains('inactive');
  


  
// }

//changeScreen();


// Hacer que aparezca, en la segunda pantalla, el número seleccionado en la primera
