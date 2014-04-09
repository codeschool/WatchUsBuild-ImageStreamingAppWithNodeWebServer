'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var axon = require('axon');
var socket = axon.socket('sub');

socket.connect('tcp://localhost:8001');
socket.subscribe('badge');

/**
 *  Have our server listen on port 3000
 */
server.listen(3000, function(){
  console.log('Server listening on port %d', 3000);
});

app.use(express.static('public'));
app.use(express.logger('dev'));

app.get('/', function(req, res){
	res.sendfile('public/index.html');
});

io.sockets.on('connection', function(socket){
  console.log(io.sockets.sockets);
});

socket.on('message', function(topic, message){
  io.sockets.emit('badge', message);
});
