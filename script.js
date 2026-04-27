const players = [
  {
    name: "ProSuomiGamer",
    points: 12,
    rank: 1,
    tiers: ["LT3⚔️", "LT3🪓"]
  },
  {
    name: "Muikkunen1",
    points: 1,
    rank: 2,
    tiers: ["LT5"]
  },
  {
    name: "coldified",
    points: 1,
    rank: 3,
    tiers: ["LT5"]
  },
  {
    name: "Swight",
    points: 290,
    rank: 4,
    tiers: ["HT3", "LT3", "HT1"]
  }
];

const leaderboard = document.getElementById("leaderboard");

players.forEach(player => {
  const div = document.createElement("div");
  div.classList.add("player");

  div.innerHTML = `
    <div class="rank">#${player.rank}</div>
    <div class="name">
      ${player.name}<br>
      <span class="points">${player.points} points</span>
    </div>
    <div class="tiers">
      ${player.tiers.map(t => `<span>${t}</span>`).join("")}
    </div>
  `;

  leaderboard.appendChild(div);
});
