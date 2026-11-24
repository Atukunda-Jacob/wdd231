import { interests } from "../data/discover.mjs";

// Visit message with localStorage - REQUIRED for audit
const visitMsg = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (visitMsg) {
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
}
localStorage.setItem("lastVisit", now);

// Build cards
const container = document.querySelector("#discover-grid");

interests.forEach((place) => {
  const card = document.createElement("section");
  card.classList.add("card");

  const h2 = document.createElement("h2");
  h2.textContent = place.name;

  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = place.image;
  img.alt = place.name;
  img.loading = "lazy";
  img.width = 300;
  img.height = 200;
  figure.appendChild(img);

  const address = document.createElement("address");
  address.textContent = place.address;

  const desc = document.createElement("p");
  desc.textContent = place.description;

  const button = document.createElement("button");
  button.textContent = "Learn More";

  card.append(h2, figure, address, desc, button);
  container.appendChild(card);
});
