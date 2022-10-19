import React, { useLayoutEffect, useState } from 'react';

import './styles.css';
import { galleryImage as Images } from '../../../../constants/images';

const FlamesGame = () => {
  const [showFloatingIcon, setShowFloatingIcon] = useState(false);
  useLayoutEffect(() => {
    document.body.style.background = '#FAF1F2';
    const musicContainer = document.querySelector('.scale-container');
    musicContainer.style.display = 'none';
  });

  const toggleFloatingIcon = () => {
    setShowFloatingIcon(!showFloatingIcon);
  };

  return (
    <div classNameName="container">
      <div classNameName="game-space">
        <div>
          <img src={Images.FlamesBanner} alt="flames-banner" />
        </div>
        <div classNameName="game-details">
          <h1>Flames</h1>
          <h4>Friend, Love, Affection, Marriage, Enemy, Sister</h4>
          <p>
            Super funny approach to find the connection with your partner. It
            helps you to find the relationships with your partner.
          </p>
        </div>
        <div classNameName="flames-container">
          <h3>Flames by Name</h3>
          <div classNameName="flame-inputs">
            <div classNameName="flame-input">
              <i className="fa fa-heart" aria-hidden="true"></i>
              <input type="text" id="name" name="name" />
              <label className="name">Enter Your Name</label>
            </div>
            <div classNameName="flame-input">
              <i className="fa fa-heart-o" aria-hidden="true"></i>
              <input type="text" id="name" name="name" />
              <label className="name">Enter Partner Name</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlamesGame;
