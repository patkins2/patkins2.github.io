import React, { useState } from 'react';

function Lightbox({ images, isOpen, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <div id="myModal" className="modal" style={{ display: 'block' }}>
      <span className="close cursor" onClick={onClose}>&times;</span>
      <div className="modal-content">
        {/* Main Image Slides */}
        {images.map((image, index) => (
          <div
            key={index}
            className="mySlides"
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <div className="numbertext">{index + 1} / {images.length}</div>
            <img src={image.src} style={{ width: '100%' }} alt={image.alt} />
          </div>
        ))}

        {/* Next/Previous controls */}
        <a className="prev" onClick={prevSlide}>&#10094;</a>
        <a className="next" onClick={nextSlide}>&#10095;</a>

        {/* Caption text */}
        <div className="caption-container">
          <p id="caption">{images[currentSlide]?.alt}</p>
        </div>

        {/* Thumbnail controls */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          {images.map((image, index) => (
            <div key={index} className="column" style={{ display: 'inline-block' }}>
              <img
                className={`demo ${index === currentSlide ? 'active' : ''}`}
                src={image.src}
                onClick={() => goToSlide(index)}
                alt={image.alt}
                style={{ width: '100%', cursor: 'pointer' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
