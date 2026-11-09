const spotlightEl = document.querySelector("#spotlights");

function getLevelName(level) {
  const l = String(level).toLowerCase();
  if (l === "3" || l === "gold") return "Gold";
  if (l === "2" || l === "silver") return "Silver";
  return "Member";
}

async function getSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    const members = data.members || data;
    const qualified = members.filter(m => {
      const l = String(m.membershipLevel || m.membership || m.level || "").toLowerCase();
      return l === "gold" || l === "3" || l === "silver" || l === "2";
    });
    const shuffled = qualified.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    spotlightEl.innerHTML = selected.map(m => {
      const level = getLevelName(m.membershipLevel || m.membership || m.level);
      const img = m.image || m.logo || "images/kampala-chamber.png";
      const site = m.website || m.url || "#";
      return `
      <section class="spotlight-card">
        <h3>${m.name}</h3>
        <img src="${img}" alt="${m.name} logo" loading="lazy" width="150" height="100">
        <p>${m.address || ""}</p>
        <p>${m.phone || ""}</p>
        <p><a href="${site}" target="_blank">${site}</a></p>
        <p class="level">${level} Member</p>
      </section>`;
    }).join("");
  } catch (error) {
    console.log(error);
  }
}
getSpotlights();
