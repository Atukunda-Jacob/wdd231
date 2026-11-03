// Visit Message - localStorage
const visitMessage = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const days = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
    if (days < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        visitMessage.textContent = `You last visited 1 day ago.`;
    } else {
        visitMessage.textContent = `You last visited ${days} days ago.`;
    }
}
localStorage.setItem("lastVisit", now);

// Load Discover Cards
const grid = document.querySelector("#discover-grid");

async function getDiscoverData() {
    const response = await fetch("data/discover.json");
    const data = await response.json();
    displayItems(data);
}

function displayItems(items) {
    items.forEach(item => {
        const card = document.createElement("section");
        card.classList.add("discover-card");
        card.innerHTML = `
            <h2>${item.name}</h2>
            <figure>
                <img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="200">
            </figure>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button>Learn More</button>
        `;
        grid.appendChild(card);
    });
}

getDiscoverData();
