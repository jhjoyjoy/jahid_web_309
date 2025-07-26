document.getElementById('eventForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('eventTitle').value;
  const date = document.getElementById('eventDate').value;
  const time = document.getElementById('eventTime').value;
  const place = document.getElementById('eventPlace').value;
  const description = document.getElementById('eventDescription').value;

  // Create event display
  const eventItem = document.createElement('li');
  eventItem.innerHTML = `
    <strong>${title}</strong><br>
    📅 ${date} | ⏰ ${time} | 📍 ${place}<br>
    📝 ${description}
  `;

  document.getElementById('eventList').appendChild(eventItem);

  // Show confirmation
  document.getElementById('eventResult').textContent = `✅ Event "${title}" posted successfully.`;

  // Reset form
  this.reset();
});
