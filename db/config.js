var mongoose = require('mongoose');
var serverHelpers = require('../lib/serverHelpers.js');
mongoose.connect('mongodb://heroku_h33nqrvn:tar07caj285k8t64819jgm3t0h@ds061506.mlab.com:61506/heroku_h33nqrvn');

var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('MongoDB connection is open!');
  });

exports.db = db;
