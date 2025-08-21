<?php
<?php
// Simple backend for admin user management (add/remove users)
// For demonstration, users are stored in a text file "users.txt"

function getUsers() {
    $users = [];
    if (file_exists('users.txt')) {
        $lines = file('users.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            $users[] = $line;
        }
    }
    return $users;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';
    $username = htmlspecialchars(trim($_POST['username'] ?? ''));

    if ($action === 'add' && $username) {
        // Add user
        file_put_contents('users.txt', $username . "\n", FILE_APPEND);
        echo "User '$username' added successfully!";
    } elseif ($action === 'remove' && $username) {
        // Remove user
        $users = getUsers();
        $users = array_filter($users, function($user) use ($username) {
            return $user !== $username;
        });
        file_put_contents('users.txt', implode("\n", $users) . "\n");
        echo "User '$username' removed successfully!";
    } else {
        echo "Invalid action or username.";
    }
} else {
    // Display user list
    $users = getUsers();
    echo "<h2>User List</h2>";
    if ($users) {
        echo "<ul>";
        foreach ($users as $user) {
            echo "<li>" . htmlspecialchars($user) . "</li>";
        }
        echo "</ul>";
    } else {
        echo "<p>No users found.</p>";
    }
}
?>