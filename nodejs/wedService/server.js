var http = require('http'),
    url = require('url'),
    server = http.createServer();


server.on ('request',function(req,res){
        console.log("--incoming request--",req.url);
        var incomingUrl = url.parse(req.url,true);
        console.log(incomingUrl);
        if(incomingUrl.path === '/hello'){
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("hello thang");
        }else  if(incomingUrl.path === '/goodbye'){
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("bye thang");
        }else{
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("resource not found on this server");
        }

        // res.writeHead(200,{'content-Type':'text/plain'});
        // res.end("hello world");
    });
    server.listen(8080);