import xmlrpc.client

with xmlrpc.client.ServerProxy("http://localhost:8000/") as proxy:
    print("3 é par? %s" % str(proxy.verifica_par(3)))
    print("100 é par? %s" % str(proxy.verifica_par(100)))
