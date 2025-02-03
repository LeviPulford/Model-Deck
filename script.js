document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  // Determine scroll step (card width + gap). Here: 150px + 20px = 170px.
  // You may adjust this value if you change the card dimensions or gap.
  const scrollStep = 170;

  prevButton.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  });

  nextButton.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
  });
});
