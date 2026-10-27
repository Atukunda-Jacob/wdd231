const menuBtn = document.getElementById('menu');
const navList = document.getElementById('navList');

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('open');
    menuBtn.textContent = navList.classList.contains('open') ? '✕' : '☰';
});
