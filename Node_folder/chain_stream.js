var fs = require("fs");  
var zlib = require('zlib');  
// Compress the file input.txt to input.txt.gz  
fs.createReadStream('compress_input.txt')  
  .pipe(zlib.createGzip())  
  .pipe(fs.createWriteStream('compress_input.txt.gz'));  
  console.log("File Compressed.");  
