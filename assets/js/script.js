

const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'your_directory'); // Replace 'your_directory' with your folder path

// Reading directory
fs.readdir(directoryPath, function (err, files) {
    // Handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    // Listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
});