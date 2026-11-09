const spotlightEl = document.querySelector("#spotlights");

async function getSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    const members = data.members || data;

    const qualified = members.filter(m => {
      const level = String(m.membershipLevel || m.membership || m.level || "").toLowerCase();
      return level === "gold" || level === "3" || level === "silver" || level === "2";
    });

    const shuffled = qualified.sort(() => 0.5 - Math.random());
    const count = shuffled.length >= 3 ? 3 : 2;
    const selected = shuffled.slice(0, count);

    spotlightEl.innerHTML = selected.map(m => {
      const level = m.membershipLevel || m.membership || m.level;
      const img = m.image || m.logo || m.img || "images/kampala-chamber.png";
      return `
      <section class="spotlight-card">
        <h3>${m.name}</h3>
        <img src="${img}" alt="${m.name} logo" loading="lazy" width="150" height="100">
        <p>${m.address || ""}</p>
        <p>${m.phone || ""}</p>
        <p><a href="${m.website || m.url || "#"}" target="_blank">${m.website || m.url || ""}</a></p>
        <p class="level">${level} Member</p>
      </section>`;
    }).join("");
  } catch (error) {
    console.log(error);
  }
}
getSpotlights();
