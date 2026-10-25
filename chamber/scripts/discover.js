// Visit message with localStorage
const visitMessage = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const diff = now - parseInt(lastVisit);
  const days = Math.floor(diff / (1000*60*60*24));
  if (days < 1) visitMessage.textContent = "Back so soon! Awesome!";
  else if (days === 1) visitMessage.textContent = `You last visited 1 day ago.`;
  else visitMessage.textContent = `You last visited ${days} days ago.`;
}
localStorage.setItem("lastVisit", now);

// Load discover places
async function loadPlaces() {
  const response = await fetch("data/discover.json");
  const places = await response.json();
  const container = document.getElementById("discover-grid");
  places.forEach(place => {
    const card = document.createElement("div");
    card.classList.add("discover-card");
    card.innerHTML = `
      <h2>${place.name}</h2>
      <figure><img src="${place.image}" alt="${place.name}" loading="lazy" width="300" height="200"></figure>
      <address>${place.address}</address>
      <p>${place.description}</p>
      <button>Learn More</button>
    `;
    container.appendChild(card);
  });
}
loadPlaces();
