const crypto = require('crypto');
var fs = require("fs");
// Create a readable stream
var readerStream;
fs.readFile('comp_folder.zip', function (err, readerStream) {
   if (err) {
       return console.error(err);
   }
   console.log("Asynchronous read: " + readerStream.toString());
});
return



const cipher = crypto.createCipher('aes192', 'a password');
var encrypted = cipher.update(readerStream, 'utf8','hex');
encrypted += cipher.final('hex');
// Create a writable stream
var writerStream = fs.createWriteStream('garble.txt');
// Pipe the read and write operations
// read input.txt and write data to output.txt

writerStream.write(encrypted,'utf8');
// Mark the end of file
writerStream.end();
// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});
writerStream.on('error', function(err){
   console.log(err.stack);
});
console.log("Program Ended");
