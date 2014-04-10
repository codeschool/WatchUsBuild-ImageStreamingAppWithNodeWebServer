'use strict';

var axon = require('axon');
var socket = axon.socket('sub');

/**
 *  Connect to localhost
 */
socket.connect('tcp://localhost:8001');

/**
 *  Subscribe the the `badge` channel
 */
socket.subscribe('badge');

/**
 *  Throw an error if one occurs
 */
socket.on('error', function(err){
  throw err;
});

/**
 *  Expose the socket
 */
module.exports = socket;
