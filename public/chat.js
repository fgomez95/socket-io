//Make connection 
/* global io */


var socket = io.connect('https://ide50-kev9504.c9users.io');

var output = document.getElementById("output");
var username = document.getElementById("username");
var message = document.getElementById("message");
var send = document.getElementById("send");
var feedback = document.getElementById("feedback");

send.addEventListener('click', function(){
    socket.emit('send_message', {
        message: message.value,
        user: username.value
    });
});

message.addEventListener('keypress', function(){
    socket.emit('typing', username.value);
});

socket.on('message_received', function(data){
    output.innerHTML+= `<p><strong>${data.user}:</strong> ${data.message}</p>`;
});

socket.on('typing', function(userTyping){
    feedback.innerHTML = `<p><strong>${userTyping} is typing a message</strong></p>`;
    setTimeout(function(){
        feedback.innerHTML = null;
    }, 2000);
});