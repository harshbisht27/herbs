import React, { useState, useEffect } from 'react';
import '../App.css';

const images = [
  {
    url: 'https://picsum.photos/seed/pic1/1200/600',
    title: 'Digital Maps by Startup India',
    description: 'Explore flourishing Indian startup ecosystem in real-time',
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=maps.startupindia.com'
  },
  {
    url: 'https://picsum.photos/seed/pic2/1200/600',
    title: 'Pitch Forward',
    description: 'A platform for women entrepreneurs to connect with investors',
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=pitchforward.com'
  },
  {
    url: 'https://picsum.photos/seed/pic3/1200/600',
    title: 'Gen AI Exchange Hackathon',
    description: 'Supported by Google',
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=genaihackathon.com'
  },
  {
    url: 'https://picsum.photos/seed/pic4/1200/600',
    title: 'Bharat Startup Knowledge Access Registry',
    description: 'Fostering knowledge innovation across industries',
    qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=bharatstartup.com'
  }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button onClick={goToPrevious} className="left-arrow">
          &#10094;
        </button>
        <div className="carousel-content-wrapper">
          <div className="carousel-content">
            <img src={images[currentIndex].url} alt={images[currentIndex].title} />
            <div className="carousel-text">
              <h2>{images[currentIndex].title}</h2>
              <p>{images[currentIndex].description}</p>
              <img src={images[currentIndex].qrCode} alt="QR Code" className="qr-code" />
            </div>
          </div>
        </div>
        <button onClick={goToNext} className="right-arrow">
          &#10095;
        </button>
      </div>
      <div className="carousel-thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.title}
            onClick={() => goToSlide(index)}
            className={index === currentIndex ? 'active-thumbnail' : 'thumbnail'}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
