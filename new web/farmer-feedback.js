document.getElementById("backBtn").addEventListener("click", () => {
  window.location.href = "farmer.html"; // Back to farmer dashboard
});

document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) return alert("All fields are required.");

  const feedbackItem = document.createElement("li");
  feedbackItem.textContent = `${name}: ${message} (✔ Submitted)`;

  document.getElementById("feedbackList").appendChild(feedbackItem);

  // Reset form
  this.reset();
});
