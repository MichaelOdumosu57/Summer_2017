const crypto = require('crypto');  
//const secret = '71f720d94bf04878c449b2aca1b48c495330c46e369f00466f8e10a7e33d60d6';  
const secret = ' Bitcoin >> share  >> qt';
const hash = crypto.createHmac('sha256', secret)  
                   .update('Welcome to JavaTpoint')  
                   .digest('hex');  
console.log(hash);  
