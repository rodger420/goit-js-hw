'use script';

const input = document.querySelector('#name-input');
let output = document.querySelector('#name-output');

input.addEventListener('input', inputText);

function inputText(event) {
  input.value === ''
    ? (output.textContent = 'незнакомец')
    : (output.textContent = event.currentTarget.value);
}