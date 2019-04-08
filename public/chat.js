//Make connection 
/* global io */


var socket = io.connect('https://ide50-kev9504.c9users.io');

var output = document.getElementById("output");
var username = document.getElementById("username");
var message = document.getElementById("message");
var send = document.getElementById("send");


send.addEventListener('click', function(){
    socket.emit('send_message', {
        message: 'hello, world',
        user: username.value
    });
});

socket.on('message_received', function(data){
    output.innerHTML+= `<p><strong>${data.user}:</strong> ${data.message}</p>`;
});