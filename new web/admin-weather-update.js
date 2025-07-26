document.getElementById('weatherForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const region = document.getElementById('region').value;
  const date = document.getElementById('date').value;
  const forecast = document.getElementById('forecast').value;

  const message = `✅ Forecast for ${region} on ${date} posted: "${forecast}"`;
  document.getElementById('forecastResult').textContent = message;

  this.reset();
});

document.getElementById('adviceForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('adviceTitle').value;
  const content = document.getElementById('adviceContent').value;

  const message = `✅ Advice "${title}" posted successfully.`;
  document.getElementById('adviceResult').textContent = message;

  this.reset();
});
