// training.js

const materials = [
  {
    title: "Organic Rice Farming Guide",
    crop: "rice",
    season: "summer",
    method: "organic",
    link: "#",
    description: "Learn sustainable organic rice farming techniques for the summer season."
  },
  {
    title: "Winter Wheat Cultivation Video",
    crop: "wheat",
    season: "winter",
    method: "hydroponic",
    link: "#",
    description: "Watch video tutorials on modern wheat farming using hydroponics."
  },
  {
    title: "Vegetable Farming in Winter",
    crop: "vegetables",
    season: "winter",
    method: "organic",
    link: "#",
    description: "Tips and techniques to grow vegetables organically in winter."
  },
  {
    title: "Hydroponic Farming Overview",
    crop: "rice",
    season: "summer",
    method: "hydroponic",
    link: "#",
    description: "Introduction to hydroponic systems and their application for rice."
  }
];

const list = document.getElementById('materialList');
const cropFilter = document.getElementById('cropFilter');
const seasonFilter = document.getElementById('seasonFilter');
const methodFilter = document.getElementById('methodFilter');

function renderMaterials() {
  const crop = cropFilter.value;
  const season = seasonFilter.value;
  const method = methodFilter.value;

  const filtered = materials.filter(item => {
    return (crop === 'all' || item.crop === crop) &&
           (season === 'all' || item.season === season) &&
           (method === 'all' || item.method === method);
  });

  list.innerHTML = '';
  if (filtered.length === 0) {
    list.innerHTML = '<p>No training materials match your filter.</p>';
    return;
  }

  filtered.forEach(mat => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${mat.title}</h3>
      <p>${mat.description}</p>
      <a href="${mat.link}" target="_blank">Read/Watch</a>
    `;
    list.appendChild(card);
  });
}

[cropFilter, seasonFilter, methodFilter].forEach(filter =>
  filter.addEventListener('change', renderMaterials)
);

document.getElementById("backBtn").addEventListener("click", () => {
  window.location.href = "farmer.html"; // change to actual dashboard
});

renderMaterials(); // initial load
