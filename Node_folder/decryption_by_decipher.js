const crypto = require('crypto');
const decipher = crypto.createDecipher('aes192', 'a password');
var decrypted = decipher.update('deb894d1ccb3e6ffcd4d4693abd17bc2', 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
