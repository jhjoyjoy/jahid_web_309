// Regional demand and supply chart using Chart.js
const ctx = document.getElementById('trendChart').getContext('2d');

const trendChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Dhaka', 'Rajshahi', 'Chattogram', 'Khulna', 'Barishal'],
    datasets: [
      {
        label: 'Demand (tons)',
        data: [120, 90, 110, 70, 50],
        backgroundColor: '#007bff'
      },
      {
        label: 'Supply (tons)',
        data: [80, 100, 95, 60, 45],
        backgroundColor: '#28a745'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Regional Demand vs Supply'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
