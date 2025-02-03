const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.model-card');
let angle = 0;
const rotateAngle = 360 / cards.length;

function rotateCarousel(direction) {
  angle += direction * rotateAngle;
  track.style.transform = `rotateY(${angle}deg)`;
  updateActiveCard();
}

function updateActiveCard() {
  cards.forEach(card => card.classList.remove('active'));
  const activeIndex = (Math.abs(angle / rotateAngle) % cards.length);
  cards[activeIndex].classList.add('active');
}

prevButton.addEventListener('click', () => rotateCarousel(1));
nextButton.addEventListener('click', () => rotateCarousel(-1));

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') rotateCarousel(1);
  if (e.key === 'ArrowRight') rotateCarousel(-1);
});
