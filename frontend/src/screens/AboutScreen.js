import React from 'react';
import { Image } from 'react-bootstrap';
import IconBar from '../images/travelicons.jpg';

const AboutScreen = () => {
  return (
    <>
      <h1>about us</h1>
      <div className='second-section'>
        <p>
          The Point of Going is a travel site, dedicated to sharing unique
          places, hidden treasures, and more in the Pacific Northwest and
          beyond.
        </p>
        <p>
          We are a team of adventurers. Our goal is to help you get the feel for
          these places, show you why you might want to visit, show you how you
          can get there, and share things to do when you arrive.
        </p>
        <p>We also look forward to your feedback and recomendations.</p>
      </div>
      <Image src={IconBar} alt='icon bar' fluid />
    </>
  );
};

export default AboutScreen;
