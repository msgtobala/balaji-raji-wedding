import React, { useState, useEffect, useLayoutEffect } from 'react';

import './styles.css';
import { galleryImage as Images } from '../../../../constants/images';

const LoveCalculator = () => {
  const [showFloatingIcon, setShowFloatingIcon] = useState(false);

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
      </div>
    </div>
  );
};

export default LoveCalculator;
