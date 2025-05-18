import React, { useState } from 'react';
import '../styles/carousel.css';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const { image, caption, details } = slides[currentIndex];

  return (
    <div className="carousel-container">
      <button onClick={goToPrev} className="carousel-button left">‹</button>
      <div className="carousel-slide">
        <div className="fade-container">
          <div className="image-wrapper">
          <div className="image-fade"></div>    
          <img key={image} src={image} alt={caption} className="carousel-image fade"/>
        </div>
        </div>          
        <div className="carousel-caption fade">
          <h3>{caption}</h3>
          <p>{details}</p>
        </div>
      </div>

      <button onClick={goToNext} className="carousel-button right">›</button>
    </div>
  );
};

export default Carousel;