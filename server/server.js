var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var serverHelpers = require('../lib/serverHelpers');
var app = express();
app.use(bodyParser());

// app.set('port', (process.env.PORT || 8080));

// app.use('/', express.static('../client'));
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client'));
});

app.get('/images', serverHelpers.fetchImages);

app.post('/image', serverHelpers.saveImage);

app.delete('/image', serverHelpers.deleteImage);

app.listen(process.env.PORT || 8080, function () {
  console.log('process.env.PORT: ', process.env.PORT);
});
