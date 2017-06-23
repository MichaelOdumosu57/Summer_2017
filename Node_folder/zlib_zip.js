const zlib = require('zlib');  
const gzip = zlib.createGzip();  
const fs = require('fs');  
const inp = fs.createReadStream('compress_input.txt');  
const out = fs.createWriteStream('compare.txt.gz');  
inp.pipe(gzip).pipe(out);  
