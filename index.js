var express = require('express');
var socket = require('socket.io');
// define app 
var app = express();
var server = app.listen(8080, function(){
   console.log('listening to port 8080'); 
});

//Static Files
app.use(express.static('public'));

//Socket setup
var io = socket(server);

io.on('connection', function(socket){
    socket.on('send_message', function(data){
        io.sockets.emit('message_received', data);
    });
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
});