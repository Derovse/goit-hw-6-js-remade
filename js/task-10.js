function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
const divControls = document.querySelector('#controls');
const divBoxes = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input[type="number"]');
let size = 30;
const boxes = [];
function createBoxes() {
  const amount = Number(input.value);
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.background = getRandomHexColor();
    size += 10;
    boxes.push(box);
  }
  divBoxes.append(...boxes);
}
function destroyBoxes() {
  divBoxes.innerHTML = '';
  size = 30;
  boxes.length = 0;
}
btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);
