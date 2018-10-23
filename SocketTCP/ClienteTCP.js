//TCP Client
var net = require('net');
var HOST = '127.0.0.1';
var PORTA = 6969;

var cliente = new net.Socket();
cliente.connect(PORTA, HOST, function() {
    console.log('CLIENTE CONECTADO EM: ' + HOST + ':' + PORTA);
    cliente.write('Olá mundo dos sockets!');
});

cliente.on('data', function(data) {
    console.log('Cliente envia: ' + data);
    cliente.destroy();
    
});

cliente.on('close', function() {
    console.log('CONEXÃO CLIENTE ENCERRADA');
});