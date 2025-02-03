document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const scrollStep = 170;

  prevButton.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  });

  nextButton.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
  });
});
