import React from 'react';

import { galleryImage as Images } from '../../constants/images';
import { useIncrementCountDown } from '../countdown/countdown';
import './MakeLove.css';

const MakeLove = () => {
  const [days, hours, minutes, seconds] = useIncrementCountDown([2022, 4, 21]);

  return (
    <div className="valentine">
      <div className="container">
        <div className="days-we-met">
          <p className="loving-for">We are in Love for.....💙💜</p>
          <div className="counter">
            <div className="counter-container">
              <span className="counter-number">{days}</span>
              <span className="counter-text">Days</span>
            </div>
            <div className="counter-container">
              <span className="counter-number">{hours}</span>
              <span className="counter-text">Hours</span>
            </div>
            <div className="counter-container">
              <span className="counter-number">{minutes}</span>
              <span className="counter-text">Minutes</span>
            </div>
            <div className="counter-container">
              <span className="counter-number">{seconds}</span>
              <span className="counter-text">Seconds</span>
            </div>
          </div>
        </div>
        <div className="valentine-container">
          <div className="valentine-left">
            <div className="wall-of-happiness">
              <h2>Love of the day !</h2>
            </div>
            <div className="wall-of-the-day-image">
              <img src={Images.MyRaji} alt="wall-of-the-day" />
              {/* <img
                className="valentine-action"
                src={Images.Lips}
                alt="kissing-lips"
              />
              <img src={Images.Hug} className="valentine-action" alt="hug" /> */}
              <img src={Images.Fuck} className="valentine-action" alt="fuck" />
            </div>
          </div>
          <div className="valentine-right">B</div>
        </div>
      </div>
      <audio id="audio-kiss">
        <source src="https://oh.oyehappy.com/wp-content/themes/oyehappy/template-parts/microsite/img/kiss.mp3" />
        Your browser isn't invited for super fun audio time.
      </audio>
    </div>
  );
};

export default MakeLove;
