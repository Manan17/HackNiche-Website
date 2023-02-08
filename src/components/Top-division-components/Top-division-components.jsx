import React from 'react';
import './top-division-c.css';
import MytypedComponent from '../typing-effect/typing.js';

import {TOP_SECTION} from '../../Module/General';

function Btn(props) {
  return (
    <div
      className="apply-button"
      data-hackathon-slug="DUHacks"
      data-button-theme="light"
      style={{height: '44px', width: '312px'}}
    ></div>
  );
}

const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const GradientBtn = ({title, className}) => {
  return (
    // Need to change the link according to the registration form
    <button
      onClick={() => openInNewTab('https://unstop.com/o/tB1Xjgm?lb=8mSVOtA')}
      className={`bg-gradient-to-r from-thOrange to bg-thBlue py-2 px-6 text-black rounded-xl duration-300 hover:scale-110 ${className}`}
    >
      {title}
    </button>
  );
};

function About() {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
}

function Myinfo() {
  return (
    <div className="Myinfo">
      <About />
      <br />
      <p className="shortjoin"> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      <br />
      <br />
      <GradientBtn title="Register" />
      &nbsp;&nbsp;
    </div>
  );
}

export {Btn, Myinfo};
