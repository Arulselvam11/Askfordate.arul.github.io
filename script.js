function handleYes() {
    window.location.href = "yes.html";
  }
  
  function handleNo() {
    window.location.href = "no.html";
  }
  
  // Floating hearts animation
  function createHearts() {
    const heartContainer = document.querySelector('.heart-bg');
    for (let i = 0; i < 30; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerText = '❤️';
      
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.top = `${Math.random() * 100}vh`;
      heart.style.fontSize = `${Math.random() * 20 + 10}px`;
      heart.style.animationDuration = `${Math.random() * 10 + 5}s`;
      heart.style.opacity = Math.random().toFixed(2);
  
      heartContainer.appendChild(heart);
    }
  }
  createHearts();
  