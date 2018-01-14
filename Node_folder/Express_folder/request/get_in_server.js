var express = require('express');
var app = express();
app.use(express.static('public'));
  
app.get('/basic.html', function (req, res) {
   res.sendFile( __dirname + "/" + "basic.html" );
})
app.get('/get_in_server', function (req, res) {
response = {
       firstname:req.query.first_name,
       lastname:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
var server = app.listen(8000, function () {
  
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
  
})
