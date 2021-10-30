import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(inputText, 500));
form.addEventListener('submit', onFormSubmit);

const INPUT_KEY = 'feedback-form-state';
let objectInput = {};

function onFormSubmit(event) {
  event.preventDefault();

  const formElem = event.target.elements;
  const email = formElem.email.value;
  const message = formElem.message.value;
  if (email === '' || message === '') {
    return alert('Все поля должны быть заполнены!');
  }
  objectInput = {
    email,
    message,
  };
  console.log(objectInput);

  form.reset();
  localStorage.removeItem(INPUT_KEY);
}

function inputText(event) {
  objectInput[event.target.name] = event.target.value;
  localStorage.setItem(INPUT_KEY, JSON.stringify(objectInput));
}

getTextForm();

function getTextForm() {
  let saveText = localStorage.getItem(INPUT_KEY);
  if (saveText) {
    saveText = JSON.parse(saveText);
    Object.entries(saveText).forEach(([name, value]) => {
      objectInput[name] = value;
      form.elements[name].value = value;
    });
  }
}
