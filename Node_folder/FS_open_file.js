var fs = require("fs");  
// Asynchronous - Opening File  
console.log("Going to open file!");  
fs.open('FS_input.txt', 'ax+', function(err, fd) {  
   if (err) {  
       return console.error(err);  
   }  
  console.log("File opened successfully!");       
});  
