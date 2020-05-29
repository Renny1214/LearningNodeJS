 var buf = new Buffer(12);
buf[0] = 77;
console.log(buf.toString('ascii'));

var buf1 = new Buffer("h");
var json = buf1.toJSON(buf1);
console.log(json.toString('ascii'));


var newbuff = Buffer.concat([buf,buf1]);
console.log(newbuff.toString('ascii')); 

var result = buf.compare(buf1);

if(result < 0) {
    console.log(buf +" comes before " + buf1);
 } else if(result === 0) {
    console.log(buf +" is same as " + buf1);
 } else {
    console.log(buf +" comes after " + buf1);
 }

 var buf2 = new Buffer("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
 var buf3 = new Buffer("ABCD");

 var result1 = buf2.compare(buf3);

if(result1 < 0) {
    console.log(buf2 +" comes before " + buf3);
 } else if(result1 === 0) {
    console.log(buf2 +" is same as " + buf3);
 } else {
    console.log(buf2 +" comes after " + buf3);
 }


 var buf3 = new Buffer(12);
 buf2.copy(buf3);
 console.log(buf3.toString('ascii'));


 var buf4 = new Buffer(12);
 buf4 = buf3.slice(2,4);
 console.log(buf4.toString('ascii'));

 console.log(buf4.length);