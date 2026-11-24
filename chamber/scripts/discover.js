import { interests } from "../data/discover.mjs";

const container = document.querySelector("#discover-grid");
container.innerHTML = "";

interests.forEach((place) => {
  const card = document.createElement("section");
  card.classList.add("card");

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure><img src="${place.image}" alt="${place.name}" loading="lazy" width="300" height="200"></figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
  `;

  const button = card.querySelector("button");
  button.addEventListener("click", () => {
    alert(place.name + "\n\n" + place.address + "\n\n" + place.description);
  });

  container.appendChild(card);
});
