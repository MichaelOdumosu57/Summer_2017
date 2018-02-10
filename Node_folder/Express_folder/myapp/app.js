var express = require('express');  
var app = express();  

app.get('/', function (req, res) {  
  res.send('Welcome to JavaTpoint!');  
});
app.get('/dodo/',function(req,res) {
	res.redirect('http://youtube.com');
}); 

app.get('/render/',function(req,res) {
	res.sendFile('/index.html');
	res.send();
}); 
app.listen(7000, function () {  
  console.log('Example app listening on port 7000!');   

});  
