// market-price.js

const priceData = [
  { crop: "Rice", area: "Dhaka", price: 55, updated: "2025-07-23" },
  { crop: "Potato", area: "Chattogram", price: 30, updated: "2025-07-23" },
  { crop: "Onion", area: "Rajshahi", price: 45, updated: "2025-07-22" },
  { crop: "Tomato", area: "Sylhet", price: 40, updated: "2025-07-23" },
  { crop: "Rice", area: "Khulna", price: 52, updated: "2025-07-23" },
  { crop: "Potato", area: "Dhaka", price: 32, updated: "2025-07-21" },
  { crop: "Tomato", area: "comilla", price: 50, updated: "2025-07-23" },
  { crop: "Rice", area: "comilla", price: 52, updated: "2025-07-24" },
  { crop: "Potato", area: "comilla", price: 25, updated: "2025-07-22" }
];

const priceBody = document.getElementById('priceBody');
const areaSelect = document.getElementById('areaSelect');

function renderTable(area) {
  priceBody.innerHTML = '';
  const filtered = area === 'all' ? priceData : priceData.filter(item => item.area.toLowerCase() === area);
  
  filtered.forEach(item => {
    const row = `
      <tr>
        <td>${item.crop}</td>
        <td>${item.area}</td>
        <td>${item.price}</td>
        <td>${item.updated}</td>
      </tr>
    `;
    priceBody.innerHTML += row;
  });
}

areaSelect.addEventListener('change', (e) => {
  renderTable(e.target.value);
});

document.getElementById("backBtn").addEventListener("click", () => {
  window.location.href = "farmer.html";
});

// Initial render
renderTable('all');
