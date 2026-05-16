window.addEventListener('load', () => {
  const wrapper = document.querySelector('.scroll-wrapper');
  const original = wrapper.querySelector('h1');

  const targetHeight = window.innerHeight * 3;

  while (wrapper.scrollHeight < targetHeight) {
    const clone = original.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    wrapper.appendChild(clone);
  }
  const itemHeight = original.offsetHeight;

  let pos = 0;
  const speed = 1;

  function animate() {
    pos += speed;
    if (pos >= itemHeight) {
      pos = 0;
    }
    wrapper.style.transform = `translateY(-${pos}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.classList.toggle('menu-open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});

document.querySelectorAll('.link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.querySelectorAll('.spark').forEach(spark => {
      spark.style.animation = 'none';
      spark.offsetHeight; // force reflow
      spark.style.animation = '';
    });
  });
});
