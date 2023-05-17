const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const fragment = document.createDocumentFragment();
ingredients.forEach(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  fragment.appendChild(liEl);
});
const ulEl = document.querySelector('#ingredients');
ulEl.appendChild(fragment);
