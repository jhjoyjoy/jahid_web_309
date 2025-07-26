// guest.js
document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", () => {
    window.location.href = "index.html"; // Change to your actual home/login page
  });
});

function navigate(page) {
  switch (page) {
    case 'market':
      window.location.href = 'guest-market-prices.html';
      break;
    case 'news':
      window.location.href = 'guest-agri-news.html';
      break;
    case 'seasonal':
      window.location.href = 'guest-seasonal-crops.html';
      break;
    case 'prediction':
      window.location.href = 'guest-demand-prediction.html';
      break;
    default:
      alert('Page not found!');
  }
}
