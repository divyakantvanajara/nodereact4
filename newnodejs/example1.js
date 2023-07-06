var converter = require("./Ex1MyModule")
var bytes =100;

var kb = converter.toKB(bytes);
console.log(kb);
var mb = converter.toMB(bytes);
console.log(mb);
var gb = converter.toGB(bytes);
console.log(gb);