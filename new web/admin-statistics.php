<?php
<?php
// Backend for displaying simple statistics

// Count guest news submissions
$guestNewsCount = 0;
if (file_exists('agri-news.txt')) {
    $content = file_get_contents('agri-news.txt');
    $guestNewsCount = substr_count($content, "---");
}

// Count admin news posts
$adminNewsCount = 0;
if (file_exists('admin-news.txt')) {
    $content = file_get_contents('admin-news.txt');
    $adminNewsCount = substr_count($content, "---");
}

// Count market price posts
$marketPriceCount = 0;
if (file_exists('market-prices.txt')) {
    $content = file_get_contents('market-prices.txt');
    $marketPriceCount = substr_count($content, "---");
}

// Display statistics
echo "<h2>Statistics</h2>";
echo "<p>Guest Agriculture News Submissions: $guestNewsCount</p>";
echo "<p>Admin Agriculture News Posts: $adminNewsCount</p>";
echo "<p>Market Price Posts: $marketPriceCount</p>";
?>