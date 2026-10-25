const btn=document.getElementById('menu');
const nav=document.querySelector('.navigation');
btn.addEventListener('click',()=>{nav.classList.toggle('open');btn.classList.toggle('open')});
