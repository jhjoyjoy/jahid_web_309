const form = document.getElementById('priceForm');
const priceTableBody = document.getElementById('priceTableBody');

let prices = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const crop = document.getElementById('cropName').value;
  const region = document.getElementById('region').value;
  const price = document.getElementById('price').value;
  const date = document.getElementById('date').value;

  prices.push({ crop, region, price, date });
  renderTable();
  form.reset();
});

function renderTable() {
  priceTableBody.innerHTML = '';
  prices.forEach((entry, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${entry.crop}</td>
      <td>${entry.region}</td>
      <td>${entry.price}</td>
      <td>${entry.date}</td>
      <td><button class="action-btn" onclick="removePrice(${index})">Delete</button></td>
    `;
    priceTableBody.appendChild(row);
  });
}

function removePrice(index) {
  if (confirm("Are you sure you want to delete this entry?")) {
    prices.splice(index, 1);
    renderTable();
  }
}

function uploadCSV() {
  const fileInput = document.getElementById('csvUpload');
  const file = fileInput.files[0];
  if (!file) {
    alert('Please select a CSV file.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const lines = e.target.result.split('\n');
    lines.forEach(line => {
      const [crop, region, price, date] = line.split(',');
      if (crop && region && price && date) {
        prices.push({ crop: crop.trim(), region: region.trim(), price: price.trim(), date: date.trim() });
      }
    });
    renderTable();
  };
  reader.readAsText(file);
}
