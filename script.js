const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    alert(`You selected ${card.textContent}`);
  });
});

const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
  carousel.scrollBy({ left: -300, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
  carousel.scrollBy({ left: 300, behavior: 'smooth' });
});
