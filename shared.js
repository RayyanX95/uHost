const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const noButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', () => {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';

    modal.classList.add('open');
    backdrop.classList.add('open');
  });
};

backdrop.addEventListener('click', () => {
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
  mobileNav.classList.remove('open');
});

if (noButton) {
  noButton.addEventListener('click', () => {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
  });
}

toggleButton.addEventListener('click', () => {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
})