// seasonal-crops.js

const seasonalCrops = {
  summer: [
    { name: "Maize", type: "Cereal" },
    { name: "Pumpkin", type: "Vegetable" },
    { name: "Watermelon", type: "Fruit" },
    { name: "Sunflower", type: "Oilseed" }
  ],
  monsoon: [
    { name: "Paddy (Aman)", type: "Cereal" },
    { name: "Okra", type: "Vegetable" },
    { name: "Eggplant", type: "Vegetable" },
    { name: "Sugarcane", type: "Cash Crop" }
  ],
  winter: [
    { name: "Wheat", type: "Cereal" },
    { name: "Cauliflower", type: "Vegetable" },
    { name: "Carrot", type: "Root Vegetable" },
    { name: "Mustard", type: "Oilseed" }
  ]
};

function showCrops(season) {
  const cropList = document.getElementById("cropList");
  cropList.innerHTML = '';

  seasonalCrops[season].forEach(crop => {
    const card = document.createElement("div");
    card.classList.add("crop-card");
    card.innerHTML = `
      <h3>${crop.name}</h3>
      <p>Type: ${crop.type}</p>
      <p>Season: ${season.charAt(0).toUpperCase() + season.slice(1)}</p>
    `;
    cropList.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "guest.html";
  });

  // Load default (e.g., summer)
  showCrops('summer');
});
