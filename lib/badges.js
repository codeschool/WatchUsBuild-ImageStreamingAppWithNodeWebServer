'use strict';

var request = require('request');

/**
 *  Load the last 10 badges from the pub/sub server
 */
exports.get = function(callback) {
  request('http://localhost:8000/badges', function(err, resp, data){
    if (err) return callback(true, []);
    callback(null, JSON.parse(data));
  });
};
