//serverside code
var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();
var server = app.listen(4000, function(){
  console.log('listening to requests on port 4000')
});

// Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);
io.on('connection', function(socket){
    console.log('made socket connection', socket.id)

    // Handle data from control
    socket.on('channel', function(data){
        io.sockets.emit('channel', data);
        console.log('Data:', data);
    });

;})
