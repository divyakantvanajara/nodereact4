var http =require("http");
var fs = require("fs");
var server =http.createServer(function(request,response){
    var url =request.url;
    var filename =null;
    if(url=='/home')
    {
        filename ="home.html";
    }
    else if(url=='/contactus')
    {
        filename="contact-dark.html";
    }
    else if(url=='/aboutus')
    {
        filename ="aboutus.html";
    }
    else if(url=='/courses')
    {
        filename="courses.html"
    }
    else if(url=='/coursdetail')
    {
        filename="coursedetail.html"
    }
    else if(url=='/instructors')
    {
        filename="instructors.html"
    }
    else if(url=='/instructordetail')
    {
        filename="instrctordetail.html"
    }
    else
    {
        filename="404error.html";
    }
    fs.readFile(filename,function(error,FileContent){
        response.writeHead(200,{'content-type':'html'});
        if(error==null)
        {
            response.write(FileContent.toString());
        }
        response.end();
    });
});
server.listen(5000);
console.log("ready to accept request");