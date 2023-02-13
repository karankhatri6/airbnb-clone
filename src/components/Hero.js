import React from 'react';
import Group from "../images/Group.png";

const Hero = () => {
  return (
    <section className='hero'>
        <img src = {Group} alt="Hero Image" />
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  );
};

export default Hero;