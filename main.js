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
