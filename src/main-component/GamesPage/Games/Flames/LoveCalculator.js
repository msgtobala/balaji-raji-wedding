import React, { useState, useEffect, useLayoutEffect } from 'react';

import './styles.css';
import { galleryImage as Images } from '../../../../constants/images';
import { useNavigate } from 'react-router-dom';

const LoveCalculator = () => {
  const [showFloatingIcon, setShowFloatingIcon] = useState(false);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    document.body.style.background = '#FAF1F2';
    const musicContainer = document.querySelector('.scale-container');
    musicContainer.style.display = 'none';
  });

  useEffect(() => {
    return () => {
      document.body.style.background = 'unset';
    };
  });

  const toggleFloatingIcon = () => {
    setShowFloatingIcon(!showFloatingIcon);
  };

  return (
    <div className="container">
      <div className="game-space">
        <div>
          <img src={Images.FlamesBanner} alt="flames-banner" />
        </div>
        <div className="game-details">
          <h1>Love Calculator</h1>
          <h4>Know the level of love towards your partner</h4>
          <p>
            Super funny approach to find the connection with your partner. It
            helps you to find the love percentage with your partner.
          </p>
        </div>
        <div className="flames-container">
          <h3>Love percentage by Name</h3>
          <div className="flame-inputs">
            <div className="flame-input">
              <i className="fa fa-heart" aria-hidden="true"></i>
              <input type="text" id="name" name="name" />
              <label className="name">Enter Your Name</label>
            </div>
            <div className="flame-input">
              <i className="fa fa-heart-o" aria-hidden="true"></i>
              <input type="text" id="name" name="name" />
              <label className="name">Enter Partner Name</label>
            </div>
          </div>
          <div className="flame-button">
            <button type="button">Calculate Love</button>
          </div>
        </div>
        <div className="game-navigation" onClick={toggleFloatingIcon}>
          <div id="hamburger" className={showFloatingIcon ? 'show' : ''}>
            <div id="game-wrap">
              <span className="icon-bar" id="one"></span>
              <span className="icon-bar" id="two"></span>
              <span className="icon-bar" id="thr"></span>
            </div>
          </div>
          <div
            className={['game-nav', showFloatingIcon ? 'show' : ''].join(' ')}
            id="settings"
            onClick={() => navigate('/')}
          >
            <i className="fa fa-home" aria-hidden="true"></i>
          </div>
          <div
            className={['game-nav', showFloatingIcon ? 'show' : ''].join(' ')}
            id="thumb"
            onClick={() => navigate('/play')}
          >
            <i className="fa fa-mail-reply" aria-hidden="true"></i>
          </div>
          <div id="overlay" className={showFloatingIcon ? 'show' : ''}></div>
        </div>
      </div>
    </div>
  );
};

export default LoveCalculator;
