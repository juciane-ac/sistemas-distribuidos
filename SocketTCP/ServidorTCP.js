//TCP server
var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;

net.createServer(function (sock) {
  console.log('SERVIDOR CONECTADO: ' + sock.remoteAddress + ':' + sock.remotePort);

  sock.on('data', function (data) {

    console.log('Dados: ' + sock.remoteAddress + ': ' + data);
    sock.write('"' + data + '"');

  });

  sock.on('close', function (data) {
    console.log('SERVIDOR ENCERRADO: ' + sock.remoteAddress + ' ' + sock.remotePort);
  });
}).listen(PORT, HOST);

console.log('SERVER LISTENING ON ' + HOST + ':' + PORT);