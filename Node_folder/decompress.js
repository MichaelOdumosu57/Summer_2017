var fs = require("fs");  
var zlib = require('zlib');  
// Decompress the file input.txt.gz to input.txt  
fs.createReadStream('compress_input.txt.gz')  
  .pipe(zlib.createGunzip())  
  .pipe(fs.createWriteStream('decompress_input.txt'));  
  console.log("File Decompressed.");  
