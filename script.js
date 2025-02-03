const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let angle = 0; // Initial rotation angle
const rotationStep = 72; // 360° / 5 cards = 72° per step

prevButton.addEventListener('click', () => {
  angle -= rotationStep;
  carousel.style.transform = `rotateY(${angle}deg)`;
});

nextButton.addEventListener('click', () => {
  angle += rotationStep;
  carousel.style.transform = `rotateY(${angle}deg)`;
});
