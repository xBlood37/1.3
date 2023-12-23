const brandsBtn = document.querySelector('#brands');
const brandsInner = document.querySelector('.brands__inner ');

brandsBtn.addEventListener('click', () => {
  brandsInner.classList.toggle('brands__inner--visible');
  if (brandsInner.classList.contains('brands__inner--visible')) brandsBtn.textContent = 'Скрыть';
  if (!brandsInner.classList.contains('brands__inner--visible')) brandsBtn.textContent = 'Показать все';
});
