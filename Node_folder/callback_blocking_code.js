var fs = require("fs");  
var data = fs.readFileSync('callback_input.txt');  
console.log(data.toString()); 
//console.log(data); 
console.log("Program Ended");   
