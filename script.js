document.addEventListener('DOMContentLoaded', () => {

  const photos = document.querySelectorAll('.photo');

  if (!('IntersectionObserver' in window)) {
    // Fallback: mostrar todo
    photos.forEach(photo => photo.classList.add('show'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '100px'
  });

  photos.forEach(photo => observer.observe(photo));

});
document.addEventListener('click', e => {
  const img = e.target;

  if (!img.classList.contains('photo')) return;

  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    img.requestFullscreen().catch(() => {});
  }
});

