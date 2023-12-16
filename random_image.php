<?php
$dir = 'assets/media'; // Directory where images are stored

// Get array of all files in the directory
$files = scandir($dir);

// Filter out non-image files and directories
$images = array_filter($files, function($file) use ($dir) {
    return is_file("$dir/$file") && in_array(strtolower(pathinfo($file, PATHINFO_EXTENSION)), ['jpg', 'png', 'gif', 'webp']);
});

// Select a random image
if (count($images) > 0) {
    $randomImage = $images[array_rand($images)];
    echo json_encode(["image" => "$dir/$randomImage"]);
} else {
    echo json_encode(["error" => "No images found"]);
}
?>
