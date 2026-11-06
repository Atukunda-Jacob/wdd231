const url = "data/members.json";
const cards = document.querySelector("#members");
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("#nav");

// Hamburger menu
menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Grid / List Toggle
gridbutton.addEventListener("click", () => {
  cards.classList.add("grid");
  cards.classList.remove("list");
  gridbutton.classList.add("active-btn");
  listbutton.classList.remove("active-btn");
});

listbutton.addEventListener("click", () => {
  cards.classList.add("list");
  cards.classList.remove("grid");
  listbutton.classList.add("active-btn");
  gridbutton.classList.remove("active-btn");
});

// Fetch members - async / await
async function getMembers() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error("Error fetching members:", error);
    cards.innerHTML = "<p>Members could not be loaded. Please try again.</p>";
  }
}

function displayMembers(members) {
  members.forEach((member) => {
    const card = document.createElement("section");
    const name = document.createElement("h2");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const level = document.createElement("p");
    const website = document.createElement("a");
    const image = document.createElement("img");

    name.textContent = member.name;
    address.textContent = member.address;
    phone.textContent = member.phone;
    level.textContent = `Membership Level: ${member.membership}`;
    website.textContent = "Visit Website";
    website.href = member.website;
    website.target = "_blank";
    image.src = `images/${member.image}`;
    image.alt = `${member.name} logo`;
    image.loading = "lazy";
    image.width = 250;
    image.height = 150;

    card.append(name, image, address, phone, level, website);
    cards.appendChild(card);
  });
}

getMembers();
