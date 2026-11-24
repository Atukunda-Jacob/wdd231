import { interests } from "../data/discover.mjs";

const container = document.querySelector("#discover-grid");

interests.forEach((item, index) => {
  const card = document.createElement("section");
  card.classList.add("discover-card");
  card.classList.add(`card${index + 1}`);

  card.innerHTML = `
    <h2>${item.name}</h2>
    <figure><img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="200"></figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button>Learn More</button>
  `;
  container.appendChild(card);
});

// --- Last Visit Message ---
const visitMsg = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit-discover");
const now = Date.now();

if (!lastVisit) {
  visitMsg.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
  if (days < 1) {
    visitMsg.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    visitMsg.textContent = "You last visited 1 day ago.";
  } else {
    visitMsg.textContent = `You last visited ${days} days ago.`;
  }
}
localStorage.setItem("lastVisit-discover", now);

// --- Mobile Menu (same as your other pages) ---
const menuBtn = document.querySelector("#menu");
const nav = document.querySelector("#nav");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}
