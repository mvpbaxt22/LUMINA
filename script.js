// FULLSCREEN SIMPLE
document.querySelectorAll('.photo').forEach(img => {
  img.addEventListener('click', () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      img.requestFullscreen();
    }
  });
});
