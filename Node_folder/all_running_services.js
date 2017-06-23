const dns = require('dns');
var i = 0;
var process =setInterval(function() {

dns.lookupService('127.0.0.1', i, (err, hostname, service) => {  
  console.log(hostname, service);  
    // Prints: localhost  
}); 
i++;
},1000 );

