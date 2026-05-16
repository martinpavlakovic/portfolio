const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.img img').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

document.getElementById('lightbox-close').addEventListener('click', () => {
  lightbox.classList.remove('active');
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.classList.remove('active');
});
