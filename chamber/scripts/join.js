document.getElementById('timestamp').value = new Date().toISOString();
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.membership-cards a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const modal = document.querySelector(link.getAttribute('href'));
    modal.showModal();
  });
});

document.querySelectorAll('dialog .close').forEach(function(btn) {
  btn.addEventListener('click', function() {
    btn.closest('dialog').close();
  });
});
