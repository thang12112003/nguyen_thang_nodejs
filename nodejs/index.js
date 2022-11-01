var http = require('http');
var httpServer = http.createServer(function (req,res){
    res.end("hello");
});

httpServer.listen(8080, function() {
    console.log("server listening on port 8080");
})