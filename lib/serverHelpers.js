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

exports.deleteImage = function(req, res) {
  var imageObj = req.body;
  Image.findOne({ url : imageObj.url}, function (err, image) {
      if (err || !image) {
        console.log('couldnt find document you are trying to delete: ', err);
      } else {
        console.log('image returned from delete request: ', image);
        image.remove(function (){
          console.log('sucessfully deleted');
          res.status(200).send('Deletion successful!');
        });
      }
  });
};


