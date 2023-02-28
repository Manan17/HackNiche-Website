import React from 'react';
import './typing.css';
import Typewriter from 'typewriter-effect';
import {TOP_SECTION} from '../../Module/General';

export default function MytypedComponent() {
  return (
    <div className="typing-div">
      <h1>
        <Typewriter
          options={{
            strings: [
              '17 February - 18 February',
              '24 hours of creation',
              'Win awesome prizes',
              'Events And Sessions'
            ],
            autoStart: true,
            loop: true
          }}
        />
      </h1>
    </div>
  );
}
