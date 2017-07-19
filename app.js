var http = require('http');

var server = http.createServer();

var port = 3000;

server.listen(port, function(){
    console.log('server is running', port);
});

server.on('connection', function(socket){
    var addr = socket.adress();
    console.log('client logged in', port);
});

server.on('request', function(req, res){
    console.log('client request');
    console.dir(req);
});

server.on('close', function(){
    console.log('server is closing');
});

