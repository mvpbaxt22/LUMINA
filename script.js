// ANIMACIÓN SCROLL
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('show');
    }
  });
});

// FULLSCREEN
document.querySelectorAll('.photo').forEach(img => {
  img.addEventListener('click', () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      img.requestFullscreen();
    }
  });
});
