import React from 'react';

var imageFooter = function(props) {
  return (
    <div>
      <hr/>
      <p className='photos-header centre'> Rating: {props.currentImage.rating} </p>
    </div> 
  )
};

export default imageFooter;