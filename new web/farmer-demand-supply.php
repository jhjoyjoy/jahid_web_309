<?php
<?php
// Backend for farmers to submit demand and supply information

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get and sanitize input
    $farmerName = htmlspecialchars(trim($_POST['farmer_name'] ?? ''));
    $contact = htmlspecialchars(trim($_POST['contact'] ?? ''));
    $type = htmlspecialchars(trim($_POST['type'] ?? '')); // 'demand' or 'supply'
    $product = htmlspecialchars(trim($_POST['product'] ?? ''));
    $quantity = htmlspecialchars(trim($_POST['quantity'] ?? ''));

    // Basic validation
    if ($farmerName && $contact && $type && $product && $quantity) {
        // Prepare data to save
        $entry = "Farmer: $farmerName\nContact: $contact\nType: $type\nProduct: $product\nQuantity: $quantity\n---\n";
        // Save to a file (append mode)
        file_put_contents('farmer-demand-supply.txt', $entry, FILE_APPEND);

        // Success response
        echo "Your $type information has been submitted successfully!";
    } else {
        // Error response
        echo "Please fill in all fields.";
    }
} else {
    // If not POST, show error
    echo "Invalid request method.";
}
?>