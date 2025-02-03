document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let angle = 0;
  const rotationStep = 72; // For 5 cards, each card occupies 72 degrees

  function rotateCarousel(direction) {
    angle += direction * rotationStep;
    carousel.style.transform = `rotateY(${angle}deg)`;
  }

  prevButton.addEventListener('click', () => rotateCarousel(-1));
  nextButton.addEventListener('click', () => rotateCarousel(1));
});
