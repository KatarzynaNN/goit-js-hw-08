import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const inputKey = 'feedback-form-state';

form.addEventListener('input', throttle(onInput), 500);

function onInput(event) {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const formValue = {
    email: email,
    message: message,
  };
  localStorage.setItem(inputKey, JSON.stringify(formValue));
}
