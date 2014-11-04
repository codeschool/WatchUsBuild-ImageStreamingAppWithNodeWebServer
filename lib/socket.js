'use strict';

var redis = require('./redis');

/**
 *  Subscribe the the `badge` channel
 */
redis.subscribe('badge');

/**
 *  Expose the client
 */
module.exports = redis;
