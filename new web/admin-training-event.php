<?php
<?php
// Backend for admin to post training events

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get and sanitize input
    $eventTitle = htmlspecialchars(trim($_POST['event_title'] ?? ''));
    $eventDate = htmlspecialchars(trim($_POST['event_date'] ?? ''));
    $eventDescription = htmlspecialchars(trim($_POST['event_description'] ?? ''));

    // Basic validation
    if ($eventTitle && $eventDate && $eventDescription) {
        // Prepare data to save
        $entry = "Title: $eventTitle\nDate: $eventDate\nDescription: $eventDescription\n---\n";
        // Save to a file (append mode)
        file_put_contents('training-events.txt', $entry, FILE_APPEND);

        // Success response
        echo "Training event posted successfully!";
    } else {
        // Error response
        echo "Please fill in all fields.";
    }
} else {
    // If not POST, show error
    echo "Invalid request method.";
}
?>