import React, { useState } from 'react';

const videoLinks = {
  Ayurveda: 'https://www.youtube.com/embed/zT8AKMkysqw',
  Yoga: 'https://www.youtube.com/embed/v7AYKMP6rOE',
  Homeopathy: 'https://www.youtube.com/embed/dejb5xQ2f4k',
  Meditation: 'https://www.youtube.com/embed/inpok4MKVLM',
  Unani: 'https://www.youtube.com/embed/dejb5xQ2f4k',
  Siddha: 'https://www.youtube.com/embed/dejb5xQ2f4k',
};

const VideoSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Ayurveda');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="video-section">
      <h1 className="vedavideo-heading">Veda Videos</h1>
      <div className="dropdown-container">
        <label htmlFor="video-category">Choose a category:</label>
        <select
          id="video-category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {Object.keys(videoLinks).map((category, index) => (
            <option value={category} key={index}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="video-container">
        <iframe
          title={selectedCategory}
          width="800"
          height="450"
          src={videoLinks[selectedCategory]}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
