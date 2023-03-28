import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const MyGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    fetch("http://localhost:3000/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="gallery__container">
      <div className="gallery__text"> Zapraszamy do naszej galerii </div>
      <Gallery
        photos={photos.map((photo) => ({
          src: photo.src,
          width: photo.width,
          height: photo.height,
          id: photo.id,
        }))}
        onClick={openLightbox}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((photo) => ({
                ...photo,
                srcset: photo.srcSet,
                caption: photo.title,
                key: photo.id,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default MyGallery;
