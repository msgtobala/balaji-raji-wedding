import React from 'react';

import TimeCountDown from '../countdown';
import * as constants from '../../constants/strings';

const Hero5 = () => {
  return (
    <section className="wpo-hero-style-4">
      <div className="wedding-announcement">
        <div className="couple-text">
          <h2>
            {constants.groomShortName} &amp; {constants.brideShortName}
          </h2>
          <p>{constants.marriedOn}</p>
          <div className="wpo-wedding-date">
            <div className="clock-grids">
              <TimeCountDown date="01/26/2023"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero5;
