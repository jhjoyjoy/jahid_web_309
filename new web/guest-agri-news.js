// agri-news.js

const newsData = [
  {
    title: "⚠️ Pest Alert: Locust Threat in Northern Areas",
    description: "Farmers are advised to inspect their fields regularly and report any sightings to local agriculture offices.",
    date: "July 22, 2025"
  },
  {
    title: "📝 Government Announces Fertilizer Subsidy Scheme",
    description: "New subsidy rates have been published to help small-scale farmers reduce input costs.",
    date: "July 20, 2025"
  },
  {
    title: "🌱 Monsoon Farming Tips for Paddy Growers",
    description: "Experts recommend using short-duration paddy varieties due to delayed monsoon onset.",
    date: "July 18, 2025"
  },
  {
    title: "💧 Irrigation Advisory Released",
    description: "Water management techniques shared by Department of Agricultural Extension (DAE).",
    date: "July 16, 2025"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const newsList = document.getElementById("newsList");
  const backBtn = document.getElementById("backBtn");

  // Render news items
  newsData.forEach(news => {
    const card = document.createElement("div");
    card.classList.add("news-card");
    card.innerHTML = `
      <h3>${news.title}</h3>
      <p>${news.description}</p>
      <p class="date">${news.date}</p>
    `;
    newsList.appendChild(card);
  });

  backBtn.addEventListener("click", () => {
    window.location.href = "guest.html";
  });
});
