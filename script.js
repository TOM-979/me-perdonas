const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.addEventListener('click', () => {
  // Abre una nueva pestaña con la página del corazón
  window.open('heart.html', '_blank');
});

noBtn.addEventListener('click', () => {
  const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (currentSize * 1.2) + 'px';
});
