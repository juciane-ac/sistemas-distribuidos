from xmlrpc.server import SimpleXMLRPCServer 

def verifica_par(n):
    print("Requisição recebida com o seguinte argumento: " + str(n))
    return n % 2 == 0

server = SimpleXMLRPCServer(("localhost", 8000))
print("Listening on port 8000...")
server.register_function(verifica_par, "verifica_par")
server.serve_forever()
