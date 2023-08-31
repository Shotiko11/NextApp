import React from 'react';
import Image from 'next/image';
import '../cssfiles/body.css'; 
import { texts } from './LongTexts';


const Body = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="image-text-container">
          <div className="centered-image">
            <Image  src="/images/imagefour.jpg" alt="Image One" width={300} height={200} />
          </div>
          <div className="text">
            <h2>Welcome to the best tech company Website</h2>
            <p>
              {texts.welcome}
            </p>
          </div>
        </div>

        <div className="image-text-container">
          <div className="text">
            <h2>why you have to choose us?</h2>
            <p>
              {texts.whyUs}
            </p>
          </div>
          <div className="centered-image">
            <Image src="/images/whyus.jpg" alt="Image Two" width={300} height={300} />
          </div>
        </div>

        <div className="image-text-container">
          <div className="centered-image">
            <Image src="/images/onlyinspired.png" alt="Image Three" width={300} height={200} />
          </div>
          <div className="text">
            <h2>Shaping the Future with Innovation</h2>
            <p>
              {texts.WaitFromUs}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
