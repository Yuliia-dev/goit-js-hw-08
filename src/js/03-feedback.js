import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(inputText, 500));
form.addEventListener('submit', submitForm);

const INPUT_KEY = 'feedback-form-state';

function submitForm(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(INPUT_KEY);
}

function inputText(event) {
  let text = localStorage.getItem(INPUT_KEY);
  text = text ? JSON.parse(text) : {};
  text[event.target.name] = event.target.value;
  localStorage.setItem(INPUT_KEY, JSON.stringify(text));
}

getTextForm();

function getTextForm() {
  let saveText = localStorage.getItem(INPUT_KEY);
  if (saveText) {
    saveText = JSON.parse(saveText);
    Object.entries(saveText).forEach(([name, value]) => (form.elements[name].value = value));
  }
}
