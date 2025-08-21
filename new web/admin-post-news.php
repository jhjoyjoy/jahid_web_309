<?php
<?php
// Backend for admin to post agriculture news

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get and sanitize input
    $title = htmlspecialchars(trim($_POST['title'] ?? ''));
    $content = htmlspecialchars(trim($_POST['content'] ?? ''));
    $date = htmlspecialchars(trim($_POST['date'] ?? ''));

    // Basic validation
    if ($title && $content && $date) {
        // Prepare data to save
        $entry = "Title: $title\nContent: $content\nDate: $date\n---\n";
        // Save to a file (append mode)
        file_put_contents('admin-news.txt', $entry, FILE_APPEND);

        // Success response
        echo "News posted successfully!";
    } else {
        // Error response
        echo "Please fill in all fields.";
    }
} else {
    // If not POST, show error
    echo "Invalid request method.";
}
?>