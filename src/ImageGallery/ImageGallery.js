// import { Component, Children } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ stateApiImages, changeModalIsOpen, bigImageSrc }) => {
  return (
    <ul className="ImageGallery">
      {stateApiImages.map(image => {
        return (
          <ImageGalleryItem
            changeModalIsOpen={changeModalIsOpen}
            bigImageSrc={bigImageSrc}
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
            id={image.largeImageURL}
            // id={image.id}
            // dataset={image.largeImageURL}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
