const form = document.getElementById('newsForm');
const tableBody = document.getElementById('newsTableBody');

let newsList = [];

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const type = document.getElementById('type').value;
  const message = document.getElementById('message').value.trim();
  const date = new Date().toLocaleString();

  newsList.push({ title, type, message, date });
  renderNews();
  form.reset();
});

function renderNews() {
  tableBody.innerHTML = '';
  newsList.forEach((news, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${news.title}</td>
      <td>${news.type}</td>
      <td>${news.message}</td>
      <td>${news.date}</td>
      <td><button class="action-btn" onclick="deleteNews(${index})">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

function deleteNews(index) {
  if (confirm("Are you sure you want to delete this news item?")) {
    newsList.splice(index, 1);
    renderNews();
  }
}
