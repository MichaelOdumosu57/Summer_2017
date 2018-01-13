//var express = require('../../../../code/API/node_modules/express');
var express = require('express');
var app = express();
var res_formats;
var res_links;
app.get('/', function (req, res) {
    
res_formats = res.format({
  'text/plain': function(){
    res.send('hey');
  },
 'text/html': function(){
    res.send('hey');
  },
  'application/json': function(){
    res.send({ message: 'hey' });
  },
 'default': function() {
    // log the request and respond with 406
    res.status(406).send('Not Acceptable');
  }
})

// res_links = res.links({
//   next: 'http://api.rnd.com/users?page=5',
//   last: 'http://api.rnd.com/users?page=10'
// })
  
  console.log("res.app  is  " + res.app )
  console.log("res.headersSent  is  " + res.headersSent )
//   console.log("res.locals   is  " + res.locals )
//   console.log("res.append() is " + res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>'])   )
//   console.log("res.attachment() is " + res.attachment('./request.js')  )
//   console.log("res.cookie is " + res.cookie('name', 'Aryan', { domain: '.xyz.com', path: '/admin', secure: true })  )
//   console.log("res.clearCookie is " + res.clearCookie('name',{domain: '.xyz.com'})  )
//   console.log("res.download is " + res.download('/home/autospark/My_Computer/Summer_2017/Node_folder/Express_folder/request.js')  )
//   console.log("res.status is " + res.status(404).end() )

//   console.log("res.json is " + res.json({ name: 'ajeet' })  )
//   console.log("res.jsonp is " + res.jsonp(null)  )
//   console.log("res.links is " + res_links)
//   console.log("res.location is " + res.location('http://xyz.com'))
//   console.log("res.redirect is " + res.redirect('http://javatpoint.com'))
//   console.log("res.render is " + res.render('index') )
    //  console.log("res.set is " + res.set('Content-Type', 'text/html') )
    //  console.log("res.get is " + res.get('Content-Type'))
    
//   console.log("res.type is " )
//   console.log(res.type('.html'))

  console.log("res.formats is " )
  console.log( res_formats)

//   res.send('<h1>The response object</h1>');
  
  
  

});
var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
