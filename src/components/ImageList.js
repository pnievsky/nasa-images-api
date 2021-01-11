import React from 'react';
import ImageItem from './ImageItem';

const ImageList = ({ images }) => {
  //array from submit form - list of different item from nasa api
  const renderedList = images.map((image) => {
    return <ImageItem
            key={image.data[0].nasa_id}
            image={image}
            />;
  });
  return <div>{renderedList}</div>;

};

export default ImageList;
