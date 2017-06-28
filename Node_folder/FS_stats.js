var fs = require("fs");
console.log("Going to get file info!");
fs.stat('../../../My_Computer.zip', function (err, stats) {
if (err) {
  return console.error(err);
  }
console.log(stats);
console.log("Got file info successfully!");
// Check file type
console.log("isFile ? " + stats.isFile());
console.log("isDirectory ? " + stats.isDirectory());
//console.log("isblockdevice ? " +  stats.isblockdevice());
console.log("isfifo ? " + stats.isfifo());
});

