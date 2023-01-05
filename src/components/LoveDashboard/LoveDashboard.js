import React, { useState, useRef } from 'react';

import { websiteImages as Images } from '../../constants/images';
import { useIncrementCountDown } from '../countdown/countdown';
import './styles.css';

const MakeLove = () => {
  const [days, hours, minutes, seconds] = useIncrementCountDown([2022, 4, 15]);
  const [mood, setMood] = useState(null);
  const kissRef = useRef();

  const setMoodAction = (moodStr) => {
    setMood(moodStr);
    if (moodStr === 'kiss' && kissRef.current) {
      kissRef.current.play();
    }

    if (moodStr === 'hug') {
    }

    if (moodStr === 'fuck') {
    }
  };

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
              {mood && mood === 'kiss' && (
                <img
                  className="valentine-action"
                  src={Images.Lips}
                  alt="kissing-lips"
                  loading="lazy"
                />
              )}
              {mood && mood === 'hug' && (
                <img src={Images.Hug} className="valentine-action" alt="hug" loading="lazy" />
              )}
              {mood && mood === 'fuck' && (
                <img
                  src={Images.Fuck}
                  className="valentine-action"
                  alt="fuck"
                  loading="lazy"
                />
              )}
            </div>
          </div>
          <div className="valentine-right">
            <div className="mood-container">
              <div>
                <img src={Images.KissWithArrow} alt="kiss-with-arrow" loading="lazy" />
                <div
                  className="mood-action"
                  onClick={() => setMoodAction('kiss')}
                >
                  Kiss
                </div>
                <ul className="mood-numbers">
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                </ul>
              </div>
              <div>
                <img src={Images.HugWithArrow} alt="hug-with-arrow" loading="lazy" />
                <div
                  className="mood-action"
                  onClick={() => setMoodAction('hug')}
                >
                  Hug
                </div>
                <ul className="mood-numbers">
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                </ul>
              </div>
              <div>
                <img src={Images.KissWithArrow} alt="kiss-with-arrow" loading="lazy" />
                <div
                  className="mood-action"
                  onClick={() => setMoodAction('fuck')}
                >
                  Fuck
                </div>
                <ul className="mood-numbers">
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <audio id="audio-kiss" ref={kissRef}>
        <source src="../../audios/kiss.mp3" />
        Your browser isn't invited for super fun audio time.
      </audio>
      <audio id="audio-fuck" ref={kissRef}>
        <source src="../../audios/y2mate.com - Sex.mp3" />
        Your browser isn't invited for super fun audio time.
      </audio>
    </div>
  );
};

export default MakeLove;
