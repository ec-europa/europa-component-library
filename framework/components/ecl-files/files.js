document.querySelectorAll('.file__translations-control').forEach(button =>
  button.addEventListener('click', event => {
    event.target.classList.toggle('is-collapsed');
  })
);
