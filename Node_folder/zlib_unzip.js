const zlib = require('zlib');    
const unzip = zlib.createUnzip();  
const fs = require('fs');  
const inp = fs.createReadStream('zlib_input.txt.gz');  
const out = fs.createWriteStream('zlib_output.txt');  
  
inp.pipe(unzip).pipe(out);  
