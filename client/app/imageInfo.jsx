import React from 'react';
import ImageList from './imageList.jsx'
import Favourites from './favourites.jsx'


var imageInfo = function(props) {
  return (
    <div>
      <ImageList list={props.imageList} changeImage={props.changeImage} deleteImage={props.deleteImage} />
      <Favourites list={props.imageList} changeImage={props.changeImage} deleteImage={props.deleteImage}/>
      <br />
    </div>
  )
};

export default imageInfo;