import React from "react";
import Astronaut from "./assets/astronaut.webp";
import Moon from "./assets/moon.webp";
import RotateSpace from "./assets/rotate-space.gif";
import "./About.css";

const AboutSection = () => {
  return (
    <div
      className="about"
      id="about_anchor"
      style={{ backgroundImage: `url(${RotateSpace})` }}
    >
      <img id="astronaut" alt="astronaut" src={Astronaut} />
      <img id="planet" alt="planet" src={Moon} />
      <div class="about-box">
        <h1 className="mb-4">About</h1>
        <p class="about-text">
        <ul>
            <br/>
          <li>Hackniche is a 24-hour hackathon taking place in DJ Sanghvi College of
          Engineering, Mumbai, on the 17th and 18th of February 2023.</li>
          <li>Our hackathon brings talented and ambitious students from all over India
          together to collaborate and create innovative solutions to real-world
          problems.</li>
          <li>Students can register in groups of 2-4 people. The hackathon
          is going to be conducted in 2 rounds.</li>
          <li>First, all the registered participants will submit their resumes, which will be screened by a
          qualified team on our end and shortlisted. </li>
          <li>The teams that move on to
          round 2 will be invited to the offline hackathon happening on campus,
          where they will have 24 hours to build a prototype for their chosen
          problem statement. </li>
          <li>Arrangements will be made for refreshments,
          resting, and recreational activities for our participants.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
