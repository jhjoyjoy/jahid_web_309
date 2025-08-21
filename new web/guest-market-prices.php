<?php
<?php
// Backend for guests to view market prices

// Check if the market prices file exists
if (file_exists('market-prices.txt')) {
    $content = file_get_contents('market-prices.txt');
    $entries = explode("---\n", $content);

    echo "<h2>Market Prices</h2>";
    foreach ($entries as $entry) {
        $entry = trim($entry);
        if ($entry) {
            echo "<pre>" . htmlspecialchars($entry) . "</pre><hr>";
        }
    }
} else {
    echo "<p>No market prices available.</p>";
}
?>