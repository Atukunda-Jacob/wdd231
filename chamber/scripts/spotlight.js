async function getSpotlights() {
  const container = document.getElementById("spotlight-container");
  try {
    const response = await fetch("data/members.json");
    const json = await response.json();
    const members = json.members || json.companies || json;
    const filtered = members.filter(m => {
      const lvl = m.membership_level ?? m.level ?? m.membership;
      return lvl == 3 || lvl == 2 || String(lvl).toLowerCase().includes("gold") || String(lvl).toLowerCase().includes("silver");
    });
    const list = filtered.length > 0 ? filtered : members;
    const selected = list.sort(() => 0.5 - Math.random()).slice(0, 3);
    container.innerHTML = "";
    selected.forEach(member => {
      const name = member.name || "Business";
      let level = "Member";
      const lvl = member.membership_level ?? member.level ?? member.membership;
      if (lvl == 3 || String(lvl).toLowerCase().includes("gold")) level = "Gold";
      else if (lvl == 2 || String(lvl).toLowerCase().includes("silver")) level = "Silver";
      let img = member.image || member.logo || member.icon || "";
      if (img && !img.startsWith("images/") && !img.startsWith("http")) img = "images/" + img;
      const card = document.createElement("div");
      card.classList.add("spotlight-card");
      card.innerHTML = `
        <h3>${name}</h3>
        ${img ? `<img src="${img}" alt="${name} logo" width="100" loading="lazy">` : ""}
        <p>${member.address || ""}</p>
        <p>${member.phone || ""}</p>
        <p><a href="${member.website || "#"}" target="_blank">${member.website || ""}</a></p>
        <p><strong>${level} Member</strong></p>
      `;
      container.appendChild(card);
    });
  } catch (e) {
    container.innerHTML = "<p>Spotlights unavailable.</p>";
  }
}
getSpotlights();
