var express = require('express');
var bodyParser = require('body-parser')
var serverHelpers = require('../lib/serverHelpers');
var app = express();
app.use(bodyParser());

app.use('/', express.static('../client'));

app.get('/images', serverHelpers.fetchImages);

app.post('/image', serverHelpers.saveImage);

app.delete('/image', serverHelpers.deleteImage);

app.listen(8080, function () {
  console.log('Photo Outlet Server listening on port 8080!');
});

