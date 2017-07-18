var net = require('net');

var hostname = 'localhost';
var port = 3000;

// connect to server
var client = new net.Socket();
client.connect(port, hostname, function() {
    console.log('connected to server -> ' + hostname + ':' + port);
	client.write('Hello');
});

// event when receiving data from server
client.on('data', function(data) {
	console.log('data from server -> ' + data);
    
    // end connection with client
	client.destroy();
});

client.on('close', function() {
	console.log('disconnected');
});

