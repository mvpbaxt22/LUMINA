const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.photo').forEach(img => {
  observer.observe(img);
});
photo.addEventListener('click', () => {
  photo.requestFullscreen();
});
