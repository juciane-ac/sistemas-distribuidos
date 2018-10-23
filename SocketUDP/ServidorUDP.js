//UDP server
var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
//udp4 -> ipv4:
var server = dgram.createSocket('udp4');

//acionado quando o servidor é inicializado e está pronto para receber pacotes UDP:
server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

//acionado quando um pacote UDP chega destinado a este servidor:
server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);

});

server.bind(PORT, HOST);

//evento encerrar socket
server.on('close',function(){
    console.log('Socket closed !');
});

//função para encerrar o socket após tempo de inatividade
setTimeout(function(){
    server.close();
},20000);