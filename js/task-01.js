const categories = document.querySelectorAll('#categories .item');
console.log(`Number  categories: ${categories.length}`);

categories.forEach(itemEl => {
  const h2El = itemEl.querySelector('h2');
  const liEls = itemEl.querySelectorAll('li');
  console.log(`Category: ${h2El.textContent}
Elements: ${liEls.length}`);
});
