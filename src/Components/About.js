// import Nav from './MainNav/MainNav';
import React from 'react';
import {Image} from 'react-bootstrap';


function About() {
  return (
    <div className="about">
      <Image src="Menu-Pictures/cookiesandc.jpg" className="logo mx-auto d-block" alt="The logo of cookies and cake" fluid />
      <h1>About Me</h1>
      <img src="Menu-Pictures/FamilyPic.jpg" id="family-photo" alt="Stacey's Family"/>
      <p>
       Hi I am Stacey and I am the baker at Cookies and Cake. I am a wife and mother to 2 small boys. Balancing family and business can sometimes be a struggle 
       but I love that I can share my passion for sweets with family and friends. I have loved baking since joining my mother in the kitchen as a child. 
       I am self taught and am always looking for ways to improve or opportunities to try something new. I hope to be a part of your next celebration 
       and am available to answer any questions you may have. 
​      </p>
    </div>
  );
}

export default About;
