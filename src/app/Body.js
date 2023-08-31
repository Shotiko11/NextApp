import React, { useState } from 'react';
import Image from 'next/image';
import '../cssfiles/body.css';
import { texts } from './LongTexts';

const Body = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    '/images/imagefour.jpg',
    '/images/whyus.jpg',
    '/images/onlyinspired.png',
  ];

  const imageClickHandler = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="home-container">
      <div className="home-content">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-text-container ${selectedImage === index ? 'selected' : ''}`}
            onClick={() => imageClickHandler(index)}
          >
            <div className="centered-image">
              <Image src={image} alt={`Image ${index}`} width={300} height={200} />
            </div>
            {selectedImage === index && (
              <div className="text">
                <h2>{index === 0 ? 'Welcome to the best tech company Website' : index === 1 ? 'Why you have to choose us?' : 'Shaping the Future with Innovation'}</h2>
                <p>{index === 0 ? texts.welcome : index === 1 ? texts.whyUs : texts.WaitFromUs}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
