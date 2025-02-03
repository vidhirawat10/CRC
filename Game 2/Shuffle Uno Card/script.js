function shuffleCards() {
    const cards = document.querySelectorAll('.card');
    const container = document.querySelector('.card-container');
    const shuffledIndices = Array.from(cards.keys()).sort(() => Math.random() - 0.5);
  
    cards.forEach((card, index) => {
      const angle = Math.random() * 40 - 20; 
      const offsetX = Math.random() * 20 - 10; 
      const offsetY = Math.random() * 20 - 10; 
  
      card.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${angle}deg)`;
      card.style.zIndex = shuffledIndices[index]; 
    });
  
    setTimeout(() => {
      cards.forEach(card => {
        card.style.transform = 'translate(0, 0) rotate(0)';
      });
    }, 1000);
  }
  