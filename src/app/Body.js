import React from 'react';
import Image from 'next/image';
import './body.css'; // Import your CSS file

const Body = () => {
  const word = "world's";
  const wordOne = "they're";
  const wordTwo = "what's";


  return (
    <div className="home-container">
      <div className="home-content">
        <div className="image-text-container">
          <div className="centered-image">
            <Image  src="/images/imageone.jpg" alt="Image One" width={300} height={200} />
          </div>
          <div className="text">
            <h2>Welcome to the Tech Industry</h2>
            <p>
              The technology industry stands as the driving force behind the modern {word} progress, pushing
              boundaries and reshaping our lives. With the continuous advancement of artificial intelligence,
              cloud computing, and the Internet of Things, tech companies are revolutionizing the way we
              communicate, work, and even think. These companies are not only developing innovative products
              and services but also creating entire ecosystems that encompass various facets of our lives, from
              entertainment and education to healthcare and transportation.
            </p>
          </div>
        </div>

        <div className="image-text-container">
          <div className="text">
            <h2>Fueling Innovation and Creativity</h2>
            <p>
              In the sprawling landscape of the technology industry, tech companies are the architects of the
              digital age. From the sleek smartphones we carry to the complex algorithms driving financial
              markets, every facet of modern life is influenced by their creations. These companies not only
              drive economic growth but also lead the charge in scientific discovery. Through research and
              development, {wordOne} unlocking the mysteries of quantum computing, exploring the potential of
              renewable energy, and unraveling the complexities of genomics.
            </p>
          </div>
          <div className="centered-image">
            <Image src="/images/imagetwo.jpg" alt="Image Two" width={300} height={200} />
          </div>
        </div>

        <div className="image-text-container">
          <div className="centered-image">
            <Image src="/images/imagethree.jpg" alt="Image Three" width={300} height={200} />
          </div>
          <div className="text">
            <h2>Shaping the Future with Innovation</h2>
            <p>
              The tech industry, a dynamic realm of innovation, constantly reinvents itself through the endeavors
              of tech companies. With each line of code, each hardware breakthrough, these companies reshape
              the boundaries of {wordTwo} possible. From startups in garages to multinational conglomerates, they
              share a common mission: to solve problems and make life better through technology. In the
              ever-evolving landscape of software, cloud services, and cutting-edge hardware, competition is
              fierce.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
