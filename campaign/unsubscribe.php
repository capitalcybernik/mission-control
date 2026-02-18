<?php
/**
 * CGA Unsubscribe Handler
 * Place this file at: cybergrantsalliance.org/unsubscribe.php
 * 
 * Usage: /unsubscribe.php?e=email@example.com&h=hash
 */

// Configuration
$UNSUBSCRIBE_FILE = __DIR__ . '/../campaign-data/unsubscribed.json';
$SECRET_KEY = 'cga-unsubscribe-2026'; // Change this to a secure random string

// Get parameters
$email = isset($_GET['e']) ? strtolower(trim($_GET['e'])) : '';
$hash = isset($_GET['h']) ? $_GET['h'] : '';

// Validate
if (empty($email) || empty($hash)) {
    header('HTTP/1.1 400 Bad Request');
    echo "Invalid unsubscribe link.";
    exit;
}

// Verify hash
$expectedHash = substr(hash('sha256', $email . $SECRET_KEY), 0, 16);
if ($hash !== $expectedHash) {
    header('HTTP/1.1 403 Forbidden');
    echo "Invalid unsubscribe link.";
    exit;
}

// Load current unsubscribed list
$data = ['unsubscribed' => [], 'updatedAt' => null];
if (file_exists($UNSUBSCRIBE_FILE)) {
    $content = file_get_contents($UNSUBSCRIBE_FILE);
    $data = json_decode($content, true) ?: $data;
}

// Add to unsubscribed if not already there
if (!in_array($email, $data['unsubscribed'])) {
    $data['unsubscribed'][] = $email;
    $data['updatedAt'] = date('c');
    
    // Ensure directory exists
    $dir = dirname($UNSUBSCRIBE_FILE);
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }
    
    // Save file
    file_put_contents($UNSUBSCRIBE_FILE, json_encode($data, JSON_PRETTY_PRINT));
    
    $message = "You have been successfully unsubscribed from Cyber Grants Alliance emails.";
} else {
    $message = "You are already unsubscribed from our email list.";
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unsubscribe - Cyber Grants Alliance</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: #f5f5f5;
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            text-align: center;
            max-width: 500px;
        }
        h1 {
            color: #1a5f7a;
            margin-bottom: 20px;
        }
        p {
            color: #666;
            line-height: 1.6;
        }
        .email {
            color: #333;
            font-weight: bold;
            margin: 10px 0;
        }
        a {
            color: #1a5f7a;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Cyber Grants Alliance</h1>
        <p><?php echo htmlspecialchars($message); ?></p>
        <p class="email"><?php echo htmlspecialchars($email); ?></p>
        <p>If you have any questions, please contact us at <a href="mailto:info@cybergrantsalliance.org">info@cybergrantsalliance.org</a>.</p>
        <p><a href="https://cybergrantsalliance.org">← Return to website</a></p>
    </div>
</body>
</html>