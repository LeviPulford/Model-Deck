const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.model-card');
let selectedIndex = 0;
const cellCount = cards.length;
const theta = 360 / cellCount;
const radius = 300;

function initializeCarousel() {
  cards.forEach((card, index) => {
    const angle = theta * index;
    card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
  });
}

function rotateCarousel() {
  const angle = theta * selectedIndex * -1;
  track.style.transform = `translateZ(-${radius}px) rotateY(${angle}deg)`;
  updateActiveCard();
}

function updateActiveCard() {
  cards.forEach(card => card.classList.remove('active'));
  const activeIndex = ((selectedIndex % cellCount) + cellCount) % cellCount;
  cards[activeIndex].classList.add('active');
}

prevButton.addEventListener('click', () => {
  selectedIndex--;
  rotateCarousel();
});

nextButton.addEventListener('click', () => {
  selectedIndex++;
  rotateCarousel();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    selectedIndex--;
    rotateCarousel();
  }
  if (e.key === 'ArrowRight') {
    selectedIndex++;
    rotateCarousel();
  }
});

initializeCarousel();
rotateCarousel();
