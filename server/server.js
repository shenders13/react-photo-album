var express = require('express');
var bodyParser = require('body-parser')
var serverHelpers = require('../lib/serverHelpers');
var app = express();
app.use(bodyParser());

app.use('/', express.static('../client'));

// app.get('/images', function (req, res) {
//   console.log('received get request');
//   res.send(imageData);
// });

app.get('/images', serverHelpers.fetchImages);

app.post('/image', serverHelpers.saveImage);

app.delete('/image', function (req, res) {
  var imageObj = req.body;
  for (var i = 0; i < imageData.length; i++) {
    if (imageData[i].id.toString() === imageObj.id.toString()) {
      imageData.splice(i, 1);
    }
  }
  res.status(200).send('Deletion successful!');
});

app.listen(8080, function () {
  console.log('Photo Outlet Server listening on port 8080!');
});