'use strict';

$(function(){
  var socket = io.connect();

  socket.on('badge', function(badge){
    $('html').prepend('<img src="https://d1ffx7ull4987f.cloudfront.net/images/courses/large_badge/'+badge.course_id+'/'+badge.badge_id+'">');
  });
});
