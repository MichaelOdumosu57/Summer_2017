var express = require('express');  
var app = express();  
var index = require('pug');
//set view engine  
app.set('views','MyViews')
app.set("view engine","pug")  
app.get('/', function (req, res) {  
res.render('index.pug',index);  
 res.render('index');  
});  
var server = app.listen(5000, function () {  
    console.log('Node server is running..');  
});  
