'use strict';

$(function(){
  var socket = io.connect();
  var src ='<img src="https://d1ffx7ull4987f.cloudfront.net/images/courses/large_badge/';

  socket.on('badge', function(badge){
    var img = $(src+badge.course_id+'/'+badge.badge_id+'">');
    $('.badge-wrapper').prepend(img);
    setTimeout(function(){
      img.addClass('on');
    }, 0);
  });
});
