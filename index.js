
var express = require('express');
const PORT = process.env.PORT || 8000;
var app = express();
var server = app.listen(PORT, () => console.log("listening on: " + PORT));
app.use(express.static('public'));

var socket = require('socket.io').listen(server);
socket.on("connection", function(socket){

  //Handshake with client
  socket.on("msg", function(data){
    console.log("received: " + data);
    socket.emit("msg", "hello client")
  })

  //Receive Data
  socket.on("data", function(data){
    console.log(data);
  })
})
