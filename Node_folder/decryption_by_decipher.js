const crypto = require('crypto');
const decipher = crypto.createDecipher('aes192', 'a password');
var decrypted = decipher.update('d375888ebe2285df929feec4cb923bed', 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
