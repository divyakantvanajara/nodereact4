var express = require("express");
var fs =require("fs");
var app = express();

app.get('/home',function(request,response){
    fs.readFile('home.html',function(error,FileContent){
        response.send(FileContent.toString());
    })
   
});
app.get('/contactus',function(request,response){
    fs.readFile('contactus.html',function(error,FileContent){

        response.send(FileContent.toString());
    })
});
app.get('/aboutus',function(request,response){
    fs.readFile('aboutus.html',function(error,FileContent){

        response.send(FileContent.toString());
    })
});
app.get('/courses',function(request,response){
    fs.readFile('courses.html',function(error,FileContent){

        response.send(FileContent.toString());
    })
});
app.get('/coursdetail',function(request,response){
    fs.readFile('coursdetail.html',function(error,FileContent){

        response.send(FileContent.toString());
    })
});
app.get('/instructors',function(request,response){
    fs.readFile('instructors.html',function(error,FileContent){
    
        response.send(FileContent.toString());
    })
});
app.get('/instructordetail',function(request,response){
    fs.readFile('instructordetail.html',function(error,FileContent){

        response.send(FileContent.toString());
    })
});    
app.all('*',function(request,response){
    fs.readFile('404error.html',function(error,FileContent){

        response.send(FileContent.toString());
    })
})
app.listen(5000);
console.log('ready to accept request');