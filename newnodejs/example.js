var converter = require("./ExMyModule")
var inches =100;

var foot = converter.toFoot(inches);
console.log(foot);
var meter = converter.toMeter(inches);
console.log(meter);
var mile = converter.toMile(inches);
console.log(mile);