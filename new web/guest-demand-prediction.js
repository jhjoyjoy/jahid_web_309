// demand-prediction.js

const demandData = [
  {
    crop: "Tomatoes",
    reason: "High demand due to off-season scarcity and rising consumption in urban areas."
  },
  {
    crop: "Mangoes",
    reason: "Seasonal demand spike combined with export market growth."
  },
  {
    crop: "Basil (Tulsi)",
    reason: "Increased use in herbal remedies and organic farming."
  },
  {
    crop: "Potatoes",
    reason: "Stable demand as a staple food, plus rising processing industry needs."
  },
  {
    crop: "Rice (Basmati)",
    reason: "Export demand growth due to premium quality and aromatic nature."
  },
  {
    crop: "Honey",
    reason: "Growing health awareness boosts demand for natural sweeteners."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("backBtn");
  const demandList = document.getElementById("demandList");

  backBtn.addEventListener("click", () => {
    window.location.href = "guest.html";
  });

  demandData.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("demand-card");
    card.innerHTML = `
      <h3>${item.crop}</h3>
      <p>${item.reason}</p>
    `;
    demandList.appendChild(card);
  });
});
