var fs = require("fs");
var data = "";

//Reading from a stream
var readerStream = fs.createReadStream('sampletext.txt');

readerStream.on('data',function(chunk)
{
    data+=chunk;
});

readerStream.on('end',function()
{
    console.log(data);
});

readerStream.on('error',function(err)
{
    console.log(err.stack);
});
console.log("Programme ended");

//Writing to a Stream
data = 'hello';

var writerStream = fs.createWriteStream('Output.txt');
writerStream.write(data,'UTF8');
writerStream.end();
writerStream.on('finish',function()
{
    console.log("write completed");
});
writerStream.on('error',function(err)
{
    console.log(err.stack);
});
console.log("programme ended");

//Ppiping the streams
var read = fs.createReadStream('sampletext.txt');
var write = fs.createWriteStream('Output.txt');
read.pipe(write);
console.log("programme ended");

//Chaining the streams
var zlib =  require('zlib');
fs.createReadStream('Output.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('Output.txt.gz'));
console.log("programme ended");

fs.createReadStream('Output.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('Output.txt'));
console.log("programme ended");



