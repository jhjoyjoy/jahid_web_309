// market-prices.js

const crops = [
  { crop: "Rice", region: "dhaka", price: 42 },
  { crop: "Wheat", region: "rajshahi", price: 38 },
  { crop: "Potato", region: "chattogram", price: 25 },
  { crop: "Tomato", region: "khulna", price: 30 },
  { crop: "Rice", region: "rajshahi", price: 40 },
  { crop: "Onion", region: "dhaka", price: 50 },
  { crop: "Garlic", region: "chattogram", price: 80 }
];

document.addEventListener("DOMContentLoaded", () => {
  const regionSelect = document.getElementById("regionSelect");
  const priceTable = document.getElementById("priceData");
  const backBtn = document.getElementById("backBtn");

  function renderTable(region) {
    priceTable.innerHTML = "";

    const filtered = region === "all"
      ? crops
      : crops.filter(c => c.region === region);

    if (filtered.length === 0) {
      priceTable.innerHTML = `<tr><td colspan="3">No data found for selected region.</td></tr>`;
      return;
    }

    filtered.forEach(item => {
      const row = `<tr>
        <td>${item.crop}</td>
        <td>${capitalize(item.region)}</td>
        <td>${item.price} Tk</td>
      </tr>`;
      priceTable.innerHTML += row;
    });
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  regionSelect.addEventListener("change", (e) => {
    renderTable(e.target.value);
  });

  backBtn.addEventListener("click", () => {
    window.location.href = "guest.html";
  });

  renderTable("all"); // Initial load
});
