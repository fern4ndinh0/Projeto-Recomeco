document.querySelector('.bt-saiba').addEventListener('click', e => {
  e.preventDefault();
  document
    .getElementById('contato')
    .scrollIntoView({ behavior: 'smooth' });
});
