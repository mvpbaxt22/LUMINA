// Fade animation
const fades = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

fades.forEach(fade => observer.observe(fade));

// Fullscreen gallery
const photos = document.querySelectorAll('.photo');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const close = document.querySelector('.close');

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = photo.src;
    });
});

close.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
