document.getElementById("backBtn").addEventListener("click", () => {
  window.location.href = "farmer.html"; // Replace with actual farmer dashboard path
});

document.getElementById("profitForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const cropName = document.getElementById("cropName").value.trim();
  const quantity = parseFloat(document.getElementById("quantity").value);
  const productionCost = parseFloat(document.getElementById("productionCost").value);
  const sellingPrice = parseFloat(document.getElementById("sellingPrice").value);
  const extraCost = parseFloat(document.getElementById("extraCost").value) || 0;

  const totalRevenue = quantity * sellingPrice;
  const totalCost = productionCost + extraCost;
  const profit = totalRevenue - totalCost;

  const result = `
    <strong>Crop:</strong> ${cropName}<br/>
    <strong>Total Revenue:</strong> Tk ${totalRevenue.toFixed(2)}<br/>
    <strong>Total Cost:</strong> Tk ${totalCost.toFixed(2)}<br/>
    <strong><span style="color: ${profit >= 0 ? 'green' : 'red'};">Profit:</span></strong> Tk ${profit.toFixed(2)}
  `;

  document.getElementById("output").innerHTML = result;
  document.getElementById("result").classList.remove("hidden");
});
