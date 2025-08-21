<?php
<?php
// Backend for guests to submit demand prediction requests

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get and sanitize input
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $contact = htmlspecialchars(trim($_POST['contact'] ?? ''));
    $product = htmlspecialchars(trim($_POST['product'] ?? ''));
    $predictionDetails = htmlspecialchars(trim($_POST['prediction_details'] ?? ''));

    // Basic validation
    if ($name && $contact && $product && $predictionDetails) {
        // Prepare data to save
        $entry = "Name: $name\nContact: $contact\nProduct: $product\nDetails: $predictionDetails\n---\n";
        // Save to a file (append mode)
        file_put_contents('guest-demand-prediction.txt', $entry, FILE_APPEND);

        // Success response
        echo "Your demand prediction request has been submitted!";
    } else {
        // Error response
        echo "Please fill in all fields.";
    }
} else {
    // If not POST, show error
    echo "Invalid request method.";
}
?>