const crypto = require('crypto');  
const decipher = crypto.createDecipher('aes192', 'a password');  
var decrypted = decipher.update('617af324ebd1241ef92acd143ffca239829c9d0a3de35fea26', 'hex', 'utf8');  
decrypted += decipher.final('utf8');  
console.log(decrypted); 
