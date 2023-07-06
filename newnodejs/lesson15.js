var fs =require("fs");
var filename="grains.txt";
var filecontent="Sorghum Lentils Chickpeas Pearl Millet Amaranth ";
fs.appendFileSync(filename,filecontent);
console.log("\n file has been create/updated successfully");