const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

document.getElementById('contact-form').addEventListener('submit', async e => {
  e.preventDefault();

  const form = e.target;

  const response = await fetch('https://formspree.io/f/xnjwnljo', {
    method: 'POST',
    body: new FormData(form), // ✅ was `this`
    headers: { Accept: 'application/json' },
  });

  if (response.ok) {
    const submitButton = document.getElementById('submit-button');
    submitButton.classList.add('success');
    await wait(2000);
    submitButton.classList.remove('success');
    alert('Message sent!');
    form.reset(); // ✅ was `this.reset()`
  } else {
    alert('Something went wrong, please try again.');
  }
});
