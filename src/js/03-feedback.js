import lThrottle from 'lodash.throttle';
const formRef = document.querySelector('form.feedback-form');

formRef.addEventListener('input', ev => {
  const field = ev.target;
  let values = getLocalStorageValues();
  if (!values) {
    values = {};
  }
  values[field.name] = field.value;
  throttle(values);
});

const throttle = lThrottle(ev => {
  localStorage.setItem('feedback-form-state', JSON.stringify(ev));
}, 500);

document.addEventListener('DOMContentLoaded', () => {
  const values = getLocalStorageValues();
  if (!values) return;
  setFormValue(values.email, values.message);
});

formRef.addEventListener('submit', elem => {
  elem.preventDefault();
  const values = getLocalStorageValues();
  if (!values || !formRef.message.value || !formRef.email.value) return;

  setFormValue();
  console.log(values);
  localStorage.removeItem('feedback-form-state');
});

const getLocalStorageValues = () =>
  JSON.parse(localStorage.getItem('feedback-form-state'));

const setFormValue = (mail = '', msg = '') => {
  formRef.email.value = mail;
  formRef.message.value = msg;
};
