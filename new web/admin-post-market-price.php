<?php
<?php
// Backend for admin to post market prices

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get and sanitize input
    $product = htmlspecialchars(trim($_POST['product'] ?? ''));
    $price = htmlspecialchars(trim($_POST['price'] ?? ''));
    $date = htmlspecialchars(trim($_POST['date'] ?? ''));

    // Basic validation
    if ($product && $price && $date) {
        // Prepare data to save
        $entry = "Product: $product\nPrice: $price\nDate: $date\n---\n";
        // Save to a file (append mode)
        file_put_contents('market-prices.txt', $entry, FILE_APPEND);

        // Success response
        echo "Market price posted successfully!";
    } else {
        // Error response
        echo "Please fill in all fields.";
    }
} else {
    // If not POST, show error
    echo "Invalid request method.";
}
?>