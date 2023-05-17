function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

btnEl.addEventListener('click', onClickBtn);

function onClickBtn() {
  const randomColor = getRandomHexColor();
  spanEl.textContent = randomColor;
  document.body.style.background = randomColor;
}
