// farmer.js

document.getElementById("logoutBtn").addEventListener("click", () => {
  alert("Logged out successfully.");
  window.location.href = "login.html"; // change as needed
});

function navigate(section) {
  alert(`Navigating to: ${section}`);
  // Simulate navigation (replace with actual routing if needed)
  switch (section) {
    case 'market':
      window.location.href = 'market-price.html';
      break;
    case 'weather':
      window.location.href = 'weather.html';
      break;
    case 'training':
      window.location.href = 'training.html';
      break;
    case 'soil':
      window.location.href = 'soil-crop-advisory.html';
      break;
    case 'feedback':
      window.location.href = 'farmer-feedback.html';
      break;
    case 'demand':
      window.location.href = 'farmer-demand-supply.html';
      break;
    case 'profit':
      window.location.href = 'calculate-profit.html';
      break;
    default:
      console.log('Unknown section');
  }
}
