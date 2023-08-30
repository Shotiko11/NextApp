import OnlyHeader from '@/app/OnlyHeader';
import React, { useState } from 'react';
import '../cssfiles/About.css'


const About = () => {
  const [paragraphVisibility, setParagraphVisibility] = useState({
    innovative: false,
    journey: false,
    pioneers: false,
    innovation: false,
    clientCentric: false,
    futureForward: false,
    conclusion: false,
  });

  const toggleParagraph = (paragraphKey) => {
    setParagraphVisibility((prevVisibility) => ({
      ...prevVisibility,
      [paragraphKey]: !prevVisibility[paragraphKey],
    }));
  };

  return (
    <div>
    <OnlyHeader />
    <div className="container">
      <div className="content">
        <h2 onClick={() => toggleParagraph('innovative')}>About Our Innovative Tech Company</h2>
        {paragraphVisibility.innovative && <p>At the forefront of technological advancement in Europe since its inception in 2016, [Company Name] has been redefining the landscape of innovation and digital transformation. With a profound commitment to excellence and a relentless pursuit of groundbreaking solutions, we have solidified our position as a leader in the tech industry.</p>}

        <h2 onClick={() => toggleParagraph('journey')}>Our Journey</h2>
        {paragraphVisibility.journey && <p>Our journey began in 2016 with a vision to bridge the gap between cutting-edge technology and real-world applications. Over the years, we have transformed challenges into opportunities, and barriers into bridges, all while consistently pushing the boundaries of what is possible. Through a combination of expertise, creativity, and a dedicated team, we have pioneered solutions that drive growth, efficiency, and impact for businesses across various sectors.</p>}

        <h2 onClick={() => toggleParagraph('pioneers')}>European Pioneers</h2>
        {paragraphVisibility.pioneers && <p>Based in the heart of Europe, [Company Name] is proud to call this diverse and dynamic continent our home. Our European roots have not only provided us with a rich tapestry of cultures and ideas but have also enabled us to cultivate a global perspective. From bustling metropolises to quaint countryside, our presence resonates across borders as we collaborate with partners, clients, and talents from all corners of the world.</p>}

        <h2 onClick={() => toggleParagraph('innovation')}>Innovation</h2>
        {paragraphVisibility.innovation && <p>Innovation is more than a buzzword for us {"-"} {" it's"} ingrained in our DNA. Our dedicated research and development teams work tirelessly to anticipate industry trends and develop solutions that stay ahead of the curve. From groundbreaking software applications to revolutionary hardware implementations, our innovation engine is fueled by the curiosity to explore the uncharted and the courage to challenge the status quo.</p>}

        <h2 onClick={() => toggleParagraph('clientCentric')}>Client-Centric Approach</h2>
        {paragraphVisibility.clientCentric && <p>Our success story {"wouldn't"} be complete without our valued clients. We view every project as an opportunity to make a difference, partnering closely with our clients to understand their unique needs and aspirations. By tailoring our solutions to align with their goals, we do not just meet expectations {"–"} we exceed them. Our commitment to excellence has earned us a reputation as a trusted partner, helping businesses thrive in the digital age.</p>}

        <h2 onClick={() => toggleParagraph('futureForward')}>A Future-Forward Horizon</h2>
        {paragraphVisibility.futureForward && <p>As we look ahead, our vision remains unwavering: to continue shaping the future through innovation, collaboration, and relentless dedication. With a focus on sustainability, inclusivity, and transformative technologies, we are poised to make an even greater impact on industries, communities, and lives.</p>}

        <h2 onClick={() => toggleParagraph('conclusion')}>In Conclusion</h2>
        {paragraphVisibility.conclusion && <p>Join us on this exciting journey as we pave the way for a future where technology knows no limits, and possibilities are endless. Feel free to ask any questions.. search us on facebook and on instagram</p>}
      </div>
    </div>
    </div>
  );
};

export default About;
