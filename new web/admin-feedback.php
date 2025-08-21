<?php
<?php
// Simple backend for guest agriculture news submission

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get and sanitize input
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email = htmlspecialchars(trim($_POST['email'] ?? ''));
    $news = htmlspecialchars(trim($_POST['news'] ?? ''));

    // Basic validation
    if ($name && $email && $news) {
        // Prepare data to save
        $entry = "Name: $name\nEmail: $email\nNews: $news\n---\n";
        // Save to a file (append mode)
        file_put_contents('agri-news.txt', $entry, FILE_APPEND);

        // Success response
        echo "Thank you for submitting your agriculture news!";
    } else {
        // Error response
        echo "Please fill in all fields.";
    }
} else {
    // If not POST, show error
    echo "Invalid request method.";
}
?>