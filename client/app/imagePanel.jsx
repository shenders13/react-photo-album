import React from 'react';
import ImageDisplay from './imageDisplay.jsx'
import ImageFooter from './imageFooter.jsx'


var imagePanel = function(props) {
  return (
    <div>
      <ImageDisplay currentImage={props.currentImage}/>
      <ImageFooter currentImage={props.currentImage}/>
    </div> 
  )
};

export default imagePanel;