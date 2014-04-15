'use strict';

var host = process.env.BADGES_HOST || 'http://localhost:8000/badges';
var request = require('request');

/**
 *  Load the last 10 badges from the pub/sub server
 */
exports.get = function(callback) {
  request(host, function(err, resp, data){
    data = JSON.parse(data);
    if (data.error) return callback(err, []);
    callback(null, data.data);
  });
};
