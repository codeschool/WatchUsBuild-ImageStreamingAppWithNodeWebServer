'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var sub = require('./lib/sub');
var badges = require('./lib/badges');

/**
 *  Have our server listen on port 3000
 */
server.listen(3000, function(){
  console.log('Server listening on port %d', 3000);
});

/**
 *  Server static assets out of the `public` directory
 */
app.use(express.static('public'));

/**
 *  Send the `public/index.html` to the browser
 */
app.get('/', function(req, res){
  res.sendfile('public/index.html');
});

/**
 *  Watch for connections
 */
io.sockets.on('connection', function(socket){
  badges.get(function(err, badgeList){
    badgeList.forEach(function(badge){
      socket.emit('badge', badge);
    });
  });
});

/**
 *  When a message comes in from the pub/sub system, send it to the sockets
 */
sub.on('message', function(topic, message){
  io.sockets.emit('badge', message);
});
