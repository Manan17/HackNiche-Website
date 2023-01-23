import React from 'react';
import Astronaut from './assets/astronaut.webp';
import Moon from './assets/moon.webp';
import RotateSpace from './assets/rotate-space.gif';
import "./About.css";

const AboutSection= () => {
  return (
    <div className='about' id='about_anchor' 
    style={{ backgroundImage: `url(${RotateSpace})` }}>
        <img id="astronaut" alt="astronaut" src= {Astronaut}/>
        <img id="planet" alt="planet"  src={Moon}/>
        <div class="about-box">
            <h1>About</h1>
            <p class="about-text">We welcome you to Essence- the biggest, most fun college fest of Central India. Join us in the celebration of youth and culture. A wide range of events spread over three ecstatic days will make this an event to reminisce. Do not miss this opportunity! We hope to see you there!</p>
        </div>  
    </div>
  )
}

export default AboutSection;

