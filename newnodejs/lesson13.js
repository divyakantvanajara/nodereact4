var fs = require("fs");
var filename="vegitables.txt";
var filecontent ="\n  Cauliflower Spinach (Palak) Eggplant Cabbage Carrot Green Peas";
fs.appendFile(filename,filecontent,function(error){
    if(error==null)
    {
        console.log("file has been create/updated successfully");
    }
});