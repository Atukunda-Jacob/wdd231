import { interests } from "../data/discover.mjs";

const grid = document.querySelector("#discover-grid");
const visitMessage = document.querySelector("#visit-message");

interests.forEach(item => {
  const card = document.createElement("section");
  card.classList.add("discover-card");

  const h2 = document.createElement("h2");
  h2.textContent = item.name;

  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.name;
  img.loading = "lazy";
  img.width = 600;
  img.height = 400;
  figure.appendChild(img);

  const address = document.createElement("address");
  address.textContent = item.address;

  const desc = document.createElement("p");
  desc.textContent = item.description;

  const button = document.createElement("button");
  button.textContent = "Learn More";

  card.append(h2, figure, address, desc, button);
  grid.appendChild(card);
});

// Visit message
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();
if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
  if (days < 1) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    visitMessage.textContent = "You last visited 1 day ago.";
  } else {
    visitMessage.textContent = `You last visited ${days} days ago.`;
  }
}
localStorage.setItem("lastVisit", now);
