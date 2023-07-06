var express = require("express");
var app = express();

app.get("/contactus",function(request,response){
    response.send("this is conact us page for get request")
});


app.post("/contactus",function(request,response){
    response.send("this is conact us page for post request")
});


app.put("/contactus",function(request,response){
    response.send("this is conact us page for put request")
});


app.delete("/contactus",function(request,response){
    response.send("this is conact us page for delete request")
});
app.listen(5000);
console.log('ready to accept request');