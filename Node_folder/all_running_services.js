const dns = require('dns');
var i = 0;
var j = 0;
var process =setInterval(function() {

dns.lookupService('127.0.0.1', i, (err, hostname, service) => {  
  if(isNaN(service)){
  	console.log(hostname, service);
	j = 0;
  }  
    // Prints: localhost 
  if(j == 2000){
	return;
  } 
}); 
i++;
j++
} );

