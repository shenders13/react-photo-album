import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello.jsx';
import Fields from './fields.jsx';
import ImageInfo from './imageInfo.jsx';
import ImagePanel from './imagePanel.jsx';
import ajaxHelpers from './ajaxHelpers.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageList: props.imageData,
      currentImage: props.imageData[0]
    };
  }

  changeImage(image) {
    this.setState({
      currentImage: image
    });
  }

  addImage(imageObj){
    var imageList = this.state.imageList;
    var prevId = imageList[imageList.length-1].id;
    var newImg = {id: prevId + 1, url: imageObj.url, title: imageObj.title, rating: imageObj.rating};

    //update state (imageList, currentImage) directly
    imageList.push(newImg);
    this.setState({
      imageList: imageList,
      currentImage: imageList[imageList.length-1]
    });

    // POST new image to the server
    ajaxHelpers.postImage(newImg, function(image) {
    });
  }

  deleteImage(imageObj) {
    var imageList = this.state.imageList;
    for (var i = 0; i < imageList.length; i++) {
      if (imageList[i].id === imageObj.id) {
        imageList.splice(i, 1);
      }
    }
    this.setState({
      imageList: imageList,
      currentImage: imageList[imageList.length-1]
    });
    ajaxHelpers.destroyRequest(imageObj, function() {
      console.log('image successfully removed!');
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='col-xs-12'>
          <Fields addImage={this.addImage.bind(this)}/>
        </div>
        <div className='col-xs-6'>
          <ImageInfo
            imageList={this.state.imageList} 
            currentImage={this.state.currentImage}
            changeImage={this.changeImage.bind(this)}
            deleteImage={this.deleteImage.bind(this)}
          />
        </div>
        <div className='col-xs-6'>
          <ImagePanel 
            currentImage={this.state.currentImage}
          />
        </div>
      </div>
    );
  }
}

ajaxHelpers.getImages(function(images) {
  ReactDOM.render(<App imageData={images}/>, document.getElementById('app'));
});
