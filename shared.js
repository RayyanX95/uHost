const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const noButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', () => {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
};

backdrop.addEventListener('click', () => {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
  mobileNav.style.display = 'none';
});

noButton.addEventListener('click', () => {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
});

toggleButton.addEventListener('click', () => {
  mobileNav.style.display = 'block';
  backdrop.style.display = 'block';
})