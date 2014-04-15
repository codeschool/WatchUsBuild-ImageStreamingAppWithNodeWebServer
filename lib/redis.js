'use strict';

var port = process.env.REDIS_PORT || 6379;
var host = process.env.REDIS_HOST || 'localhost';
var auth = process.env.REDIS_AUTH || null;

var redis = require('redis');
var client = redis.createClient(port, host);

if (auth) client.auth(auth);

client.on('error', function(err){
  throw err;
});

module.exports = client;
