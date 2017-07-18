//echo function - socket server


var net = require('net');

// create socket server
var server = net.createServer(function (socket) {
    // check connected client information
    socket.name = socket.remoteAddress + ":" + socket.remotePort;
    console.log('connected -> ' + socket.name); 

    // event when received messages from clients
    socket.on('data', function (data) {
        console.log('data from client : ' + data);
        
        // send back the messages
        socket.write(data + ' from server.');
    });
      
    // disconnected from client
    socket.on('end', function() {
        console.log('disconnected -> ' + socket.name);
    });
             
});

//execute server

var port = 3000;
server.listen(port);

console.log('socket server executed : ' + port);
      