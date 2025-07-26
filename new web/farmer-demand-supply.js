document.getElementById("backBtn").addEventListener("click", () => {
  window.location.href = "farmer.html"; // Change this to actual dashboard
});

// Example data
const highDemandCrops = ["Tomato", "Potato", "Onion", "Maize"];
const overSuppliedCrops = ["Cabbage", "Pumpkin", "Radish"];

const highDemandList = document.querySelector("#highDemand ul");
const overSuppliedList = document.querySelector("#overSupplied ul");
const suggestionsPara = document.getElementById("suggestions");

// Populate the lists
highDemandCrops.forEach(crop => {
  const li = document.createElement("li");
  li.textContent = crop;
  highDemandList.appendChild(li);
});

overSuppliedCrops.forEach(crop => {
  const li = document.createElement("li");
  li.textContent = crop;
  overSuppliedList.appendChild(li);
});

// Generate planting advice
suggestionsPara.textContent = `Based on current trends, consider planting: ${highDemandCrops.join(', ')}. 
Avoid excessive planting of: ${overSuppliedCrops.join(', ')}.`;
