document.getElementById('timestamp').value = new Date().toISOString();

document.querySelectorAll('.card a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = document.querySelector(link.getAttribute('href'));
    if (modal) modal.showModal();
  });
});

document.querySelectorAll('dialog .close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('dialog').close();
  });
});
