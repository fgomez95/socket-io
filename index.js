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
    console.log('someone access the chat');
});