const crypto = require('crypto');  
const decipher = crypto.createDecipher('aes192', 'a password');  
var decrypted = decipher.update('41adc42d834456b249f2ea106d3a370cf8919b656ba0cd7102f73d8eba88ed3561db215dbebfb3943ed15f314e744e8bc9f76515853e06ecc30c18662b8574e45334ab30af29ec06c7937416210d606f6eec9e57f6a322dc052571e850b941d9aeb8240f508c75d81a09769be9d591482690ab8b3bbb79f66b13964369dd0cab2209444f8802101253b0843ee648efe7b5301e9af82d03ff98be1aba311972a9ff9e458d90a8f408dbe1fd4b90f5b52420202222d3129bc847aa95f3052fbf08f4e6dae5844df756f74393f0a541a1ca', 'hex', 'utf8');  
decrypted += decipher.final('utf8');  
console.log(decrypted); 
