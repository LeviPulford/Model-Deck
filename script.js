const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    alert(`You selected ${card.textContent}`);
  });
});

