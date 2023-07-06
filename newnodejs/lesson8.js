var http = require('http');
var server =http.createServer(function(request,response){
console.log(request.url);
response.writeHead(200,{'content-type':'text/html'})

if(request.url =='/home')
{
    response.write("<html><head></head><body><h1>Home</h1></body></html>");
}
else if(request.url =='/category')
{
    response.write("<html><head></head><body><h1>Category</h1></body></html");
}
else if(request.url =='/product')
{
    response.write("<html><head></head><body><h1>Product</h1></body></html");
}
else if(request.url =='/aboutus')
{
    response.write("<html><head></head><body><h1>About Us</h1></body></html");
}
else if(request.url =='/contactus')
{
    response.write("<html><head></head><body><h1>Contact Us</h1></body></html");
}
else 
{
    response.write("<html><head></head><body><h1>Page not found</h1></body></html>");
}

response.end();

});
server.listen(5000);
console.log("ready to accept request");