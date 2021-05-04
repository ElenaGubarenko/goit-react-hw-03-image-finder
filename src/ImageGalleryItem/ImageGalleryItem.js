const ImageGalleryItem = ({ id, src, alt, changeModalIsOpen, bigImageSrc }) => {
  return (
    <li className="ImageGalleryItem" onClick={changeModalIsOpen}>
      <img
        className="ImageGalleryItem-image"
        id={id}
        src={src}
        alt={alt}
        onClick={bigImageSrc}
      />
    </li>
  );
};

export default ImageGalleryItem;
