var http = require("http");
var server =http.createServer(function(request,response){
console.log(request.url);
response.writeHead(200,{'content-type':'application/json'});
 var data =null;
 if(request.url=='/india')
 {
    data =JSON.stringify({
        name:'India',
        capital:'Delhi',
        contient:'asia',
            code:91
    });
 }
 else if(request.url =='/us')
 {
    data = JSON.stringify({
        name:'United States of america',
        capital:'washington DC',
        contient:'america',
        code:1
 });
}
else if(request.url =='/japan')
{
    data =JSON.stringify({
        name:'Japan',
        capital:'tokyo',
        contient:'asia',
        code:81
    })
}
    response.write(data)
    response.end();
});
server.listen(5000);
console.log("ready to accept request");
