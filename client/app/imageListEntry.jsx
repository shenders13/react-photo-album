import React from 'react';

var imageListEntry = function(props) {
  return (
    <div>
      <div className='image-row' onClick={function() { props.changeImage(props.image); }}>
        <div className='col-xs-10'>
          <div className='image-title'>{props.image.title}</div>
        </div>
        <div className='col-xs-2'>
          <img className='trash-can' src='http://downloadicons.net/sites/default/files/trash-icon-47886.png' onClick={function() { props.deleteImage(props.image) }}/>
        </div>
      </div>
    </div> 
  )
};

export default imageListEntry;