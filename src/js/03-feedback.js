import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const inputKey = 'feedback-form-state';

let formValue = {
  email: '',
  message: '',
};

form.addEventListener('input', throttle(onInput, 500));

function onInput(event) {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  formValue = {
    email: email,
    message: message,
  };
  localStorage.setItem(inputKey, JSON.stringify(formValue));
}

const formValueJSON = localStorage.getItem(inputKey);
if (formValueJSON) {
  formValue = JSON.parse(formValueJSON);
  form.elements.email.value = formValue.email;
  form.elements.message.value = formValue.message;
}

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  console.log(formValue);
  localStorage.removeItem(inputKey);
  form.reset();
}
