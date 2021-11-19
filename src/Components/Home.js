import React from 'react';
import {Image} from 'react-bootstrap';
import Carousel from './mainCarousel.js';

function Home () {
  return (
    <div>
      <Image src="Menu-Pictures/cookiesandc.jpg" className="logo" alt="The logo of cookies and cake" fluid />
      <Carousel/>
    </div>
  );
}

export default Home;

