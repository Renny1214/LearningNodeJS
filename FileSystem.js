var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('Output.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log(fd);     
});