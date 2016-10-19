var mongoose = require('mongoose');
var serverHelpers = require('../lib/serverHelpers.js');
mongoose.connect('mongodb://heroku_0224dth3:sabqib512c8cb46gid7iljbs4j@ds061506.mlab.com:61506/heroku_0224dth3');

var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('MongoDB connection is open!');
  });

exports.db = db;
