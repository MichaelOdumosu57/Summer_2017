// Import events module  
var events = require('events');
// Create an eventEmitter object  
var eventEmitter = new events.EventEmitter(); 

var connectHandler = function connected() {
   console.log('connection succesful.');
}
eventEmitter.on('baseball',connectHandler);

