<?php
<?php
// Backend for displaying market prices to users

if (file_exists('market-prices.txt')) {
    $content = file_get_contents('market-prices.txt');
    $entries = explode("---\n", $content);

    echo "<h2>Latest Market Prices</h2>";
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