var mongoose = require('mongoose');
var serverHelpers = require('../lib/serverHelpers.js');
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost/photoApp');
}

var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('MongoDB connection is open!');
});

exports.db = db;
