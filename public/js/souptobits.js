'use strict';

$(function(){
  var socket = io.connect();

  socket.on('badge', function(badge){
    var badge = badge[0];
    $('html').prepend('<img src="'+badge+'">');
  });
});
