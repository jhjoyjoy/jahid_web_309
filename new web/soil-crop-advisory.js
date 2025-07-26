document.getElementById("advisoryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const crop = document.getElementById("cropType").value;
  const soil = document.getElementById("soilType").value;
  const output = document.getElementById("recommendation");

  if (!crop || !soil) {
    output.innerHTML = "<strong>Please select both crop and soil type.</strong>";
    return;
  }

  let message = "<h3>Recommended Practices:</h3><ul>";

  if (crop === "rice" && soil === "clayey") {
    message += "<li>Ensure proper drainage to avoid waterlogging.</li>";
    message += "<li>Apply nitrogen fertilizers in splits.</li>";
  } else if (crop === "wheat" && soil === "loamy") {
    message += "<li>Loamy soil is ideal. Use phosphorous-rich fertilizer.</li>";
    message += "<li>Maintain moderate moisture levels.</li>";
  } else if (crop === "vegetables" && soil === "sandy") {
    message += "<li>Sandy soil requires frequent irrigation.</li>";
    message += "<li>Use compost to improve water retention.</li>";
  } else {
    message += `<li>Monitor soil pH and use appropriate nutrients for ${crop} on ${soil} soil.</li>`;
    message += "<li>Rotate crops to maintain soil fertility.</li>";
  }

  message += "</ul><p><strong>Note:</strong> Always conduct a soil test before major cultivation.</p>";

  output.innerHTML = message;
});
