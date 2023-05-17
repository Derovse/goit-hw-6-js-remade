const refs = {
  input: document.querySelector('#name-input'),
  spanEl: document.querySelector('h1  #name-output'),
};
console.log(refs.input.addEventListener('input', onInput));
refs.input.addEventListener('input', onInput);
function onInput(el) {
  if (el.currentTarget.value === '') {
    return (refs.spanEl.textContent = 'Anonymous');
  }
  return (refs.spanEl.textContent = el.currentTarget.value);
}
