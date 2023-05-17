const counterValue = document.querySelector('#value');
const decrementButton = document.querySelector(
  'button[data-action="decrement"]',
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]',
);
let counterValueEl = 0;

const updateCounterValue = () => {
  counterValue.textContent = counterValueEl;
};

incrementButton.addEventListener('click', () => {
  counterValueEl += 1;
  updateCounterValue();
});

decrementButton.addEventListener('click', () => {
  counterValueEl -= 1;
  updateCounterValue();
});
