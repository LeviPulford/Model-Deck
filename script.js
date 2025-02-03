document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const cards = document.querySelectorAll('.card');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  const angleStep = 15; // degrees between each card in the fan
  const translateZ = 150; // distance from the rotation axis (adjust as needed)
  
  // Start with the middle card active.
  let activeIndex = Math.floor(cards.length / 2);

  function updateCarousel() {
    // Loop through each card and set its transform based on its position relative to activeIndex.
    cards.forEach((card, i) => {
      // Calculate the relative angle: active card gets 0°; others are offset by multiples of angleStep.
      let angle = (i - activeIndex) * angleStep;
      card.style.transform = `rotateY(${angle}deg) translateZ(${translateZ}px)`;
      // If you want to visually indicate the active card (e.g., with scaling),
      // you could add something like:
      // card.style.transform += (i === activeIndex) ? ' scale(1.1)' : ' scale(1)';
    });
  }

  updateCarousel();

  prevButton.addEventListener('click', () => {
    if (activeIndex > 0) {
      activeIndex--;
      updateCarousel();
    }
  });

  nextButton.addEventListener('click', () => {
    if (activeIndex < cards.length - 1) {
      activeIndex++;
      updateCarousel();
    }
  });
});
