<?php
<?php
// Backend for displaying weather updates to users

if (file_exists('weather-updates.txt')) {
    $content = file_get_contents('weather-updates.txt');
    $entries = explode("---\n", $content);

    echo "<h2>Latest Weather Updates</h2>";
    foreach ($entries as $entry) {
        $entry = trim($entry);
        if ($entry) {
            echo "<pre>" . htmlspecialchars($entry) . "</pre><hr>";
        }
    }
} else {
    echo "<p>No weather updates available.</p>";
}
?>