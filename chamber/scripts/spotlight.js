async function getSpotlights() {
  const container = document.getElementById("spotlight-container");
  try {
    const response = await fetch("data/members.json");
    const json = await response.json();
    const members = json.members || json.companies || json;
    const filtered = members.filter(m => {
      const level = String(m.membership || m.membership_level || m.level || "").toLowerCase();
      return level.includes("gold") || level.includes("silver") || level === "3" || level === "2";
    });
    const list = filtered.length > 0 ? filtered : members;
    const shuffled = list.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    container.innerHTML = "";
    selected.forEach(member => {
      const name = member.name || member.business || "Business";
      const address = member.address || "";
      const phone = member.phone || "";
      const website = member.website || "#";
      const level = member.membership || (member.membership_level == 3 ? "Gold" : member.membership_level == 2 ? "Silver" : "Member");
      const image = member.image || member.logo || "kampala-chamber.png";
      const card = document.createElement("div");
      card.classList.add("spotlight-card");
      card.innerHTML = `
        <h3>${name}</h3>
        <img src="images/${image}" alt="${name} logo" width="100" loading="lazy" onerror="this.style.display='none'">
        <p>${address}</p>
        <p>${phone}</p>
        <p><a href="${website}" target="_blank">${website}</a></p>
        <p><strong>${level} Member</strong></p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = "<p>Spotlights unavailable. Check members.json</p>";
  }
}
getSpotlights();
