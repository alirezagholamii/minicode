const path = require("path")

console.log(__dirname); // folder name
console.log(__filename); // full name and path

console.log(`the file name is ${path.basename(__filename)}`);

