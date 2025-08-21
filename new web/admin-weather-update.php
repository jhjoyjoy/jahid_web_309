<?php
<?php
// Backend for admin to post weather updates

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get and sanitize input
    $weatherDate = htmlspecialchars(trim($_POST['weather_date'] ?? ''));
    $weatherInfo = htmlspecialchars(trim($_POST['weather_info'] ?? ''));

    // Basic validation
    if ($weatherDate && $weatherInfo) {
        // Prepare data to save
        $entry = "Date: $weatherDate\nWeather: $weatherInfo\n---\n";
        // Save to a file (append mode)
        file_put_contents('weather-updates.txt', $entry, FILE_APPEND);

        // Success response
        echo "Weather update posted successfully!";
    } else {
        // Error response
        echo "Please fill in all fields.";
    }
} else {
    // If not POST, show error
    echo "Invalid request method.";
}
?>