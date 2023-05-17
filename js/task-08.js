const formEl = document.querySelector('.login-form');
const loginEl = document.querySelector('[type="email"]');
const passwordEl = document.querySelector('[type="password"]');
formEl.addEventListener('submit', handleSubmit);
function handleSubmit(ev) {
  ev.preventDefault();
  const loginValue = loginEl.value.trim();
  const passwordValue = passwordEl.value.trim();
  if (loginValue === '' || passwordValue === '') {
    alert('Введите login и password.');
  } else {
    const data = {
      login: loginValue,
      password: passwordValue,
    };

    console.log(data);
    ev.currentTarget.reset();
  }
}
