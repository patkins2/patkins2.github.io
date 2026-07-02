import React, { useEffect, useState } from 'react';

function Lightbox({ images, isOpen, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(0);
    }
  }, [images, isOpen]);

  if (!isOpen) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="myModal" className="modal" role="dialog" aria-modal="true" style={{ display: 'block' }}>
      <button type="button" className="close cursor" onClick={onClose} aria-label="Close lightbox">&times;</button>
      <div className="modal-content">
        {/* Main Image Slides */}
        {images.map((image, index) => (
          <div
            key={index}
            className="mySlides"
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <div className="numbertext">{index + 1} / {images.length}</div>
            <img src={image.src} className="lightbox-main-image" alt={image.alt} />
          </div>
        ))}

        {/* Next/Previous controls */}
        <button type="button" className="prev" onClick={prevSlide} aria-label="Previous image">&#10094;</button>
        <button type="button" className="next" onClick={nextSlide} aria-label="Next image">&#10095;</button>

        {/* Caption text */}
        <div className="caption-container">
          <p id="caption">{images[currentSlide]?.alt}</p>
        </div>

        {/* Thumbnail controls */}
        <div className="thumbnail-row">
          {images.map((image, index) => (
            <button key={index} type="button" className="column" onClick={() => goToSlide(index)} aria-label={`Go to image ${index + 1}`}>
              <img
                className={`demo ${index === currentSlide ? 'active' : ''}`}
                src={image.src}
                alt={image.alt}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
