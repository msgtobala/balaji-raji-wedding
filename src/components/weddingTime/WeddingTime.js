import React from 'react';

import TimeCountDown from '../countdown';
import fr1 from '../../images/countdown/frame1.png';
import fr2 from '../../images/countdown/frame2.png';
import fr3 from '../../images/countdown/frame3.png';
import fr4 from '../../images/countdown/frame4.png';

const WeddingTime = (props) => {
  return (
    <section className={`wpo-wedding-times ${props.wdClass}`}>
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="clock-grids" id="clock2">
              <TimeCountDown date="01/26/2023" />
              <div className="frame1">
                <img src={fr1} alt="frame1" loading="lazy"/>
              </div>
              <div className="frame2">
                <img src={fr2} alt="frame2" loading="lazy" />
              </div>
              <div className="frame3">
                <img src={fr3} alt="frame3" loading="lazy" />
              </div>
              <div className="frame4">
                <img src={fr4} alt="frame4" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingTime;
