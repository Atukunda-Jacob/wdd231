const menu = document.getElementById("menu");
const nav = document.querySelector(".navigation");
menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  nav.classList.toggle("open");
});
