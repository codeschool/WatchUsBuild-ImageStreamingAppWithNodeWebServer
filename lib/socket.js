'use strict';

var axon = require('axon');
var socket = axon.socket('sub');

/**
 *  On error
 */
socket.on('error', function(err){
  throw err; 
});

/**
 *  Subscribe the the `badge` channel
 */
socket.connect('tcp://localhost:8001');

/**
 *  Expose the client
 */
module.exports = socket;
