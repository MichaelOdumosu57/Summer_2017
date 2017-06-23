var fs = require("fs");  
var data = fs.readFileSync('callback_input.txt');  
console.log(data.toString());  
console.log("Program Ended");   
