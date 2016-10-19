var mongoose = require('mongoose');
var serverHelpers = require('../lib/serverHelpers.js');
mongoose.connect('');

var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('MongoDB connection is open!');
  });

exports.db = db;
