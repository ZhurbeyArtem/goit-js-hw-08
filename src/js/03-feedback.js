import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form')

const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');
const savedState = localStorage.getItem('feedback-form-state');

function setStore() {
  const feedbackFormState = {
    email: '',
    message: '',
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
}

if (savedState) {
  const { email, message } = JSON.parse(savedState);
  emailInput.value = email;
  messageTextarea.value = message;
}
else {
  setStore()
}

const updateLocalStorage = throttle((e) => {
  const data = localStorage.getItem('feedback-form-state')
  const { email, message } = JSON.parse(data)

  const feedbackFormState = {
    email: e.type === 'email' ? e.value : email,
    message: e.type === 'textarea' ? e.value : message,
  };

  localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
}, 500);

const clearStorage = (e) => {
  e.preventDefault()

  console.log('before clean');
  console.log("email ", emailInput.value,)
  console.log("message ", messageTextarea.value,)

  localStorage.removeItem('feedback-form-state')
  emailInput.value = '';
  messageTextarea.value = '';

  console.log('after clean');
  console.log("email ", emailInput.value,)
  console.log("message ", messageTextarea.value,)
}



form.addEventListener('input', (e) => updateLocalStorage(e.target))
form.addEventListener('submit', clearStorage)
