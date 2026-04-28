const players = [
  {
    name: "ProSuomiGamerYT",
    points: 12,
    rank: 1,
    tiers: ["⚔️ | LT3", "🪓 | LT3"]
  },
  {
    name: "Kaseriih",
    points: 7,
    rank: 2,
    tiers: ["🪓 | LT4", "🔨 | HT4"]
  },
  {
    name: "Enii_M",
    points: 6,
    rank: 3,
    tiers: ["🔮 | LT3"]
  },
  {
    name: "Muikkunen1",
    points: 3,
    rank: 4,
    tiers: ["🪓 | LT4"]
  },
  {
    name: "Rotanvaippa",
    points: 3,
    rank: 5,
    tiers: ["⚔️ | LT4"]
  },
  {
    name: "Matti2404",
    points: 3,
    rank: 6,
    tiers: ["⚔️ | LT4"]
  },
  {
    name: "ItsPertti",
    points: 3,
    rank: 7,
    tiers: [" | LT4"]
  },
  {
    name: "Tohkted",
    points: 2,
    rank: 8,
    tiers: ["🪓 | HT5"]
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
