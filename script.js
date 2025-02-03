document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let angle = 0;
  const rotationStep = 72; // 360° divided by 5 cards

  // Rotate the carousel by a fixed angle increment
  function rotateCarousel(direction) {
    angle += direction * rotationStep;
    carousel.style.transform = `rotateY(${angle}deg)`;
    // Optionally: Update the active card state here if you add dynamic highlighting
  }

  prevButton.addEventListener('click', () => rotateCarousel(-1));
  nextButton.addEventListener('click', () => rotateCarousel(1));
});
