var getImages = function(callback) {
  $.ajax({
    url: 'http://localhost:8080/images',
    type: 'GET',
    success: function(data) {
      return callback(data) ;
    },
    error: function(error) {
      console.error('ajax GET request failed: ', error);
    }
  });
};

var postImage = function(image, callback) {
  $.post({
    url: "http://localhost:8080/image",
    data: image,
    success: function(image) {
      callback(image);
    },
    error: function(error) {
      console.error('Failed to post new image: ', error);
      callback(error);
    }
  });
};

var destroyRequest = function(image, callback) {
  var imageId = image.id;
  $.ajax({
    url: "http://localhost:8080/image",
    type: 'DELETE',
    data: image,
    success: function(image) {
      callback(image);
    },
    error: function(error) {
      console.error('Failed to delete image: ', error);
    }
  });
};

var ajaxHelpers = {
  getImages: getImages, 
  postImage: postImage,
  destroyRequest: destroyRequest
};

export default ajaxHelpers;
