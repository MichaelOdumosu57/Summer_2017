var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));
app.get('/basic.html', function (req, res) {
    
  res.sendFile( __dirname.split("post")[0] + "basic.html");
})
app.post('/post_example1', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
       firstname:req.body.firstname,
       lastname:req.body.lastname
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
