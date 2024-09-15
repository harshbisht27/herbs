import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const images = [
  {
    url: 'https://cdn.pixabay.com/photo/2024/03/20/04/00/ai-generated-8644565_640.jpg',
  },
  {
    url: 'https://media.post.rvohealth.io/wp-content/uploads/2024/02/Ayurvedic-header.jpg',
  },
  {
    url: 'https://media.istockphoto.com/id/697860312/photo/indian-ayurvedic-dietary-supplement-called-chyawanprash-chyavanaprasha-is-a-cooked-mixture-of.jpg?s=612x612&w=0&k=20&c=outabsxtvdSSt4aCkRdjtKrVtv7qko4N6AMA6qVtWmo=',
  },
  {
    url: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280,h_720/https://arogyaved.com/wp-content/uploads/2022/03/Ayurveda.jpg',
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start from 1, since 0 is a cloned slide
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);

  const totalSlides = images.length;
  
  // Clone the first and last slides to create an infinite loop
  const clonedImages = [images[totalSlides - 1], ...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    if (isTransitioning) return; // Prevent multiple clicks during the transition
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      // Reset to the last real slide
      setCurrentIndex(totalSlides);
      carouselRef.current.style.transition = 'none'; // Disable transition
      setTimeout(() => {
        carouselRef.current.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
      }, 0);
    } else if (currentIndex === totalSlides + 1) {
      // Reset to the first real slide
      setCurrentIndex(1);
      carouselRef.current.style.transition = 'none';
      setTimeout(() => {
        carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
      }, 0);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="about-container">
      <div className="about-box">
        <h1 className="about-heading">All About Veda Vibes</h1>
        <p>
          Veda Vibes is an Ayurvedic platform designed to promote the ancient wisdom of Ayurveda, especially among youth. Our mission is to make Ayurveda more accessible and relatable to the modern generation by blending traditional knowledge with contemporary lifestyles. At Veda Vibes, you can explore the principles of Ayurveda, natural remedies, holistic healing, and yoga practices tailored to your individual health needs. Join us in a journey towards balanced living, healthy choices, and a better understanding of how Ayurveda can enhance your life.
        </p>

        <div className="carousel-container">
          <div className="carousel-wrapper">
            <button onClick={goToPrevious} className="left-arrow">
              &#10094;
            </button>
            <div className="carousel-content-wrapper">
              <div
                ref={carouselRef}
                className="carousel-content"
                style={{ 
                  transform: `translateX(-${currentIndex * 100}%)`, 
                  transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {clonedImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={`Slide ${index + 1}`}
                    className={index === currentIndex ? "active" : ""}
                  />
                ))}
              </div>
            </div>
            <button onClick={goToNext} className="right-arrow">
              &#10095;
            </button>
          </div>
          <div className="carousel-thumbnails">
            {images.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${index + 1 === currentIndex ? 'active-thumbnail' : ''}`}
                onClick={() => goToSlide(index + 1)}
              >
                <img src={image.url} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
