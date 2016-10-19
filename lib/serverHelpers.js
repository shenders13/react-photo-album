var Image = require('../db/imageModel.js');
var db = require('../db/config.js').db;

exports.fetchImages = function(req, res) {
  Image.find({}).exec(function(err, images) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(images);
    }
  });
};

exports.saveImage = function(req, res) {
  var imgObj = req.body;
  Image.create(imgObj, function(err, image) {
    if (err) {
      res.status(400).send(error)
    } else {
      res.status(200).send(image)
    }
  })
};
