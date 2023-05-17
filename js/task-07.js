const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

inputEl.addEventListener('input', () => {
  const fontSize = `${inputEl.value}px`;
  spanEl.style.fontSize = fontSize;
});
