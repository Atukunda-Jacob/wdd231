import { interests } from "../data/discover.mjs";

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
  button.addEventListener("click", () => {
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `
      <h2>${place.name}</h2>
      <img src="${place.image}" alt="${place.name}" style="width:100%">
      <p><strong>${place.address}</strong></p>
      <p>${place.description}</p>
      <p>Visit ${place.name} in Kampala and experience the culture, history and business of Uganda.</p>
      <button id="closeBtn">Close</button>
    `;
    document.body.appendChild(dialog);
    dialog.showModal();
    dialog.querySelector("#closeBtn").addEventListener("click", () => {
      dialog.close();
      dialog.remove();
    });
  });

  card.append(h2, figure, address, desc, button);
  container.appendChild(card);
});
