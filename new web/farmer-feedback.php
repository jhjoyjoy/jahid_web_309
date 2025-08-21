<?php
<?php
// Backend for farmers to submit feedback

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get and sanitize input
    $farmerName = htmlspecialchars(trim($_POST['farmer_name'] ?? ''));
    $contact = htmlspecialchars(trim($_POST['contact'] ?? ''));
    $feedback = htmlspecialchars(trim($_POST['feedback'] ?? ''));

    // Basic validation
    if ($farmerName && $contact && $feedback) {
        // Prepare data to save
        $entry = "Farmer: $farmerName\nContact: $contact\nFeedback: $feedback\n---\n";
        // Save to a file (append mode)
        file_put_contents('farmer-feedback.txt', $entry, FILE_APPEND);

        // Success response
        echo "Thank you for your feedback!";
    } else {
        // Error response
        echo "Please fill in all fields.";
    }
} else {
    // If not POST, show error
    echo "Invalid request method.";
}
?>