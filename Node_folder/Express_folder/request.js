//var express = require('../../../../code/API/node_modules/express');
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('<h1>The request object</h1>');
  console.log("req.app is" + req.app )
  console.log("req.baseurl is" + req.baseurl )
  console.log("req.body is" + req.body)
  console.log("req.cookies is" + req.cookies)
  console.log("req.fresh is" + req.fresh)
  console.log("req.hostname is" + req.hostname)
  console.log("req.ip is" + req.ip)
  console.log("req.ips is" + req.ips)
  console.log("req.originalurl is" + req.originalurl)
  console.log("req.params is" + req.params)
  console.log("req.path is" + req.path)
  console.log("req.protocol is" + req.protocol)
  console.log("req.query is" + req.query)
  console.log("req.route is" + req.route)
  console.log("req.secure is" + req.secure)
  console.log("req.signedcookies is" + req.signedcookies)
  console.log("req.stale is" + req.stale)
  console.log("req.subdomains is" + req.subdomains)
  console.log("req.xhr is" + req.xhr)
  
  console.log("req.accepts() " + req.accepts('text/html'))
  console.log("req.get() " + req.get('Content-Type'))
  console.log("req.is() " + req.is('html'))
  console.log("req.param() " + req.param('name') )
  

});
var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
