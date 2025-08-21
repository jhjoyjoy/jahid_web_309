<?php
<?php
// Backend for users to submit soil and crop advisory requests

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get and sanitize input
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $contact = htmlspecialchars(trim($_POST['contact'] ?? ''));
    $location = htmlspecialchars(trim($_POST['location'] ?? ''));
    $soilType = htmlspecialchars(trim($_POST['soil_type'] ?? ''));
    $cropQuery = htmlspecialchars(trim($_POST['crop_query'] ?? ''));

    // Basic validation
    if ($name && $contact && $location && $soilType && $cropQuery) {
        // Prepare data to save
        $entry = "Name: $name\nContact: $contact\nLocation: $location\nSoil Type: $soilType\nQuery: $cropQuery\n---\n";
        // Save to a file (append mode)
        file_put_contents('soil-crop-advisory.txt', $entry, FILE_APPEND);

        // Success response
        echo "Your advisory request has been submitted!";
    } else {
        // Error response
        echo "Please fill in all fields.";
    }
} else {
    // If not POST, show error
    echo "Invalid request method.";
}
?>