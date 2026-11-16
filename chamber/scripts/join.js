// Set timestamp
const timestampField = document.getElementById('timestamp');
if (timestampField) {
  timestampField.value = new Date().toISOString();
}

// Modal Dialogs
document.querySelectorAll('[data-dialog]').forEach(button => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById(button.getAttribute('data-dialog'));
    if (dialog) dialog.showModal();
  });
});

document.querySelectorAll('dialog .close').forEach(button => {
  button.addEventListener('click', () => {
    button.closest('dialog').close();
  });
});
