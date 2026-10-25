const url = "./data/members.json";
const cards = document.querySelector("#members");
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  members.forEach(member => {
    let card = document.createElement("section");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}" loading="lazy" width="200" height="100">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p><a href="${member.website}" target="_blank">${member.website}</a></p>
      <p>Membership: ${member.membership}</p>
    `;
    cards.appendChild(card);
  });
}

gridBtn.addEventListener("click", () => {
  cards.classList.add("grid");
  cards.classList.remove("list");
});
listBtn.addEventListener("click", () => {
  cards.classList.add("list");
  cards.classList.remove("grid");
});

getMembers();
