'use strict';

$(function(){
  var socket = io.connect();

  socket.on('badge', function(badge){
    $('html').prepend('<img src="'+badge+'">');
  });
});
