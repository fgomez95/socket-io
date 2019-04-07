var express = require('express');

// define app 
var app = express();
var server = app.listen(8080, function(){
   console.log('listening to port 8080'); 
});


app.use(express.static('public'));