document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let angle = 0;
  const rotationStep = 72; // 360°/5 = 72° per card

  function rotateCarousel(direction) {
    carousel.style.animation = 'none'; // disable any auto-rotation
    angle += direction * rotationStep;
    carousel.style.transform = `rotateY(${angle}deg)`;
  }

  prevButton.addEventListener('click', () => rotateCarousel(-1));
  nextButton.addEventListener('click', () => rotateCarousel(1));
});
