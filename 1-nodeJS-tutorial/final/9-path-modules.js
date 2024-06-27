const path = require('path')

const filePath = path.join('content', 'subfolder', 'test.txt');
const absoluteFilePath = path.join(__dirname, 'content', 'subfolder', 'test.txt');

console.log(filePath);
console.log(absoluteFilePath);

// Return the last portion of a path.
const base = path.basename(absoluteFilePath);
console.log(base);