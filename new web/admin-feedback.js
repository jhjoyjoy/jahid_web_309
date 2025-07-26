const feedbackList = [
  {
    id: 1,
    farmer: "Jahid Hasan",
    feedback: "Please update crop price for Chittagong.",
    status: "Pending",
    reply: ""
  },
  {
    id: 2,
    farmer: "Fatema Begum",
    feedback: "Unable to access training resources.",
    status: "Pending",
    reply: ""
  }
];

// Load feedback into the table
function loadFeedback() {
  const tbody = document.getElementById("feedbackTableBody");
  tbody.innerHTML = "";

  feedbackList.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.farmer}</td>
      <td>${item.feedback}</td>
      <td>${item.status}</td>
      <td>
        <textarea id="reply-${item.id}" rows="2" placeholder="Type your reply here...">${item.reply}</textarea>
      </td>
      <td>
        <button class="reply-btn" onclick="sendReply(${index})">Send Reply</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Send reply
function sendReply(index) {
  const replyText = document.getElementById(`reply-${feedbackList[index].id}`).value.trim();
  if (replyText === "") {
    alert("Please write a reply.");
    return;
  }

  feedbackList[index].reply = replyText;
  feedbackList[index].status = "Replied";
  alert(`Reply sent to ${feedbackList[index].farmer}`);
  loadFeedback();
}

// Export feedback to CSV
document.getElementById("exportBtn").addEventListener("click", function () {
  let csv = "Farmer,Feedback,Status,Reply\n";
  feedbackList.forEach(fb => {
    csv += `"${fb.farmer}","${fb.feedback}","${fb.status}","${fb.reply}"\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "feedback_report.csv";
  link.click();
});

loadFeedback();
