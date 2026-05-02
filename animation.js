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
  const speed = 3;

  function animate() {
    pos += speed;
    if (pos >= itemHeight) {
      pos = 0;
    }
    wrapper.style.transform = `translateY(-${pos}px)`;
    requestAnimationFrame(animate);
  }

  // Start the engine
  animate();
});

console.log(window);
console.log(document.defaultView);
