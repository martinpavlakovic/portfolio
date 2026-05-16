const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

document.getElementById('contact-form').addEventListener('submit', async e => {
  e.preventDefault();

  const response = await fetch('https://formspree.io/f/xnjwnljo', {
    method: 'POST',
    body: new FormData(this),
    headers: { Accept: 'application/json' },
  });

  if (response.ok) {
    const submitButton = document.getElementById('submit-button');
    submitButton.classList.add('success');
    await wait(2000);
    submitButton.classList.remove('success');
    alert('Message sent!');
    this.reset();
  } else {
    alert('Something went wrong, please try again.');
  }
});
