const brandsBtn = document.querySelector('#brands');
const brandsInner = document.querySelector('.brands__inner ');

brandsBtn.addEventListener('click', () => {
  brandsInner.classList.toggle('brands__inner--visible');
});
