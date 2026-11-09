async function getSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    const members = data.members || data;
    const goldSilver = members.filter(m => m.membership === "Gold" || m.membership === "Silver" || m.membership_level === 3 || m.membership_level === 2);
    const shuffled = goldSilver.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    const container = document.getElementById("spotlight-container");
    container.innerHTML = "";
    selected.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");
      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="images/${member.image}" alt="${member.name} logo" width="100" loading="lazy">
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><a href="${member.website}" target="_blank">${member.website}</a></p>
        <p><strong>${member.membership} Member</strong></p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.log("Spotlight error", error);
  }
}
getSpotlights();
