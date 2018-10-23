//UDP client
var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var message = new Buffer('Enviando uma mensagem via UDP!');

var client = dgram.createSocket('udp4');
//requer um objeto nodejs buffer apropriado (client.send)
//0=deslocamento no buffer
//message.lenght = n. de bytes a serem enviados
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('Mensagem UDP enviada para ' + HOST +':'+ PORT);
    //encerra o cliente após envio da mensagem
    client.close();
});