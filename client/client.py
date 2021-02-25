import socketio

sio= socketio.Client() 
sio.connect('http://localhost:3000')

@sio.event 
def message(data): 
    print('I received a message!')

@sio.on('to-client-msg') 
def on_message(data):
    print('I received a message!')