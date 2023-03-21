document.addEventListener("DOMContentLoaded", function(event) {
  const submitButton = document.querySelector('.submit-button');
  const submitContainer = document.querySelector('.submit-container');
  const resultContainer = document.querySelector('.result-container');
  const selectedNumber = document.querySelector('.selected-number');

  const btn1 = document.querySelector('#number-1');
  const btn2 = document.querySelector('#number-2');
  const btn3 = document.querySelector('#number-3');
  const btn4 = document.querySelector('#number-4');
  const btn5 = document.querySelector('#number-5');

  submitButton.addEventListener('click', showResultContainer);

  function showResultContainer() {
    resultContainer.classList.remove('inactive');
    submitContainer.classList.add('inactive');

    const selectedElement = document.querySelector('.number-container.selected').textContent;
    const selectedValue = selectedElement ? selectedElement.textContent : "";

    selectedNumber.innerHTML = selectedValue;
  }

  btn1.addEventListener('click', function() {
    selectedNumber.innerHTML = btn1.textContent;
  });

  btn2.addEventListener('click', function() {
    selectedNumber.innerHTML = btn2.textContent;
  });

  btn3.addEventListener('click', function() {
    selectedNumber.innerHTML = btn3.textContent;
  });

  btn4.addEventListener('click', function() {
    selectedNumber.innerHTML = btn4.textContent;
  });

  btn5.addEventListener('click', function() {
    selectedNumber.innerHTML = btn5.textContent;
  });
});



