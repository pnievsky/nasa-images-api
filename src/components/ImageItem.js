import React from 'react';

const ImageItem = ({ image }) => {
  return (
        <div>
          <img src={image.links[0].href} />
          {image.data[0].title}
        </div>
  );
}

export default ImageItem;
